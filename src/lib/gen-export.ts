import fs from 'node:fs'
import path from 'node:path'
import minimatch from 'minimatch'

type FilesResult = [string[], string[]]

function match(s: string, patterns: string|string[]) {
  let result = false
  if (typeof patterns === 'string') {
    patterns = [patterns]
  }

  for (const p of patterns) {
    result = minimatch(s, p)
    if (result) break
  }

  return result
}

function getFiles(dir: string, ignores:string[] = []): FilesResult {
  const files = fs.readdirSync(dir)
  const jsFiles: string[] = []
  const dirs: string[] = []
  files.forEach((file: string) => {
    if (match(file, ignores)) return
    file = path.join(dir, file)
    if (fs.lstatSync(file).isDirectory()) {
      dirs.push(path.basename(file))
    } else if (file.endsWith('.js')) {
      jsFiles.push(path.basename(file))
    }
  })
  return [jsFiles, dirs]
}

function _genExport(dir: string, files: FilesResult, dryRun: boolean) {
  const jsFiles = files[0]
  const dirs = files[1]
  // const exportName = path.basename(jsFiles[0], '.js');
  let result = ''
  for (const file of jsFiles) {
    result += `export * from './${file}';\n`
  }

  for (const dir of dirs) {
    result += `export * from './${dir}/index.js';\n`
  }

  if (!result) {
    return
  }

  if (dryRun) {
    console.log(':::' + path.join(dir, 'index.js' + ':::\n'))
    console.log(result)
  } else {
    fs.writeFileSync(path.join(dir, 'index.js'), result)
  }

  return result
}

interface GenExportOptions {
  ignores?: string[];
  dryRun?: boolean;
}

export function genExport(dir: string, {ignores = [], dryRun = false}: GenExportOptions): void {
  const files = getFiles(dir, ignores)
  _genExport(dir, files, dryRun)
  for (let aDir of files[1]) {
    aDir = path.join(dir, aDir)
    genExport(aDir, {ignores, dryRun})
  }
}

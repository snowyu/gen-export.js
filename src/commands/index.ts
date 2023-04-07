// export {run} from '@oclif/core'

import {Args, Command, Flags} from '@oclif/core'
import {genExport} from '../lib/gen-export'

export default class Export extends Command {
  static description = 'Generate export index.js of ESM on a directory'

  static examples = [
    `$ <%= config.bin %> . -d
export * from './a.js'
export * from './b.js'
`,
  ]

  static flags = {
    dryRun: Flags.boolean({char: 'd', description: 'print it instead of saving file.'}),
    ignore: Flags.string({char: 'i', multiple: true, description: 'the file patterns to ignore'}),
  }

  static args = {
    dir: Args.directory({description: 'the directory to export', required: true, default: '.'}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Export)
    const ignores = ['.*', 'node_modules', '**/index.js']
    if (flags.ignore) {
      ignores.push(...flags.ignore)
    }
    // this.log('TCL:: ~ file: index.ts:28 ~ Export ~ run ~ args:', args);
    // this.log('TCL:: ~ file: index.ts:28 ~ Export ~ run ~ flags:', flags);

    genExport(args.dir, {dryRun: flags.dryRun, ignores})
    // this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}


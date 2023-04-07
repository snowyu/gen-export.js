import {expect, test} from '@oclif/test'

describe('export', () => {
  test
  .stdout()
  .command(['.', 'test/helpers', '-d'])
  .it('runs export cmd', ctx => {
    console.log(ctx.stdout)
    expect(ctx.stdout).to.contain("export * from './init.js'")
  })
})

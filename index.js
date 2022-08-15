import ip from 'ip';
import chalk from "chalk";
export default class addIPWebpackPlugn {
  constructor () {
  }
  apply(compiler) {
    compiler.hooks.done.tap('addIPWebpackPlugn', () => {
      console.log(chalk.yellow('网络地址为', ip.address()))
    })
  }
}
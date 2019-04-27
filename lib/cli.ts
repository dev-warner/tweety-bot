import commander from 'commander';

const split = (str: string) => {
    return str.split(',')
};

export const cli = () => {
    commander
        .version('0.0.1')
        .option('-q, --query <value>', `Add query example: -q #javascript`, '#javascript')
        .option('-s --min [n]', `Add min amount of time to wait before each action example: -s 2500`, 2500)
        .option('-l --max [n]', `Add max amount of time to wait before each action example: -l 240000`, 240000)
        .option('-d --duration [n]', `Duration in hours example: -d 24`, 1)
        .option('-a --actions <list>', `Actions to use example: -a like, follow`, split, [])
        .parse(process.argv)
        .on('error', () => {
            commander.outputHelp();
            process.exit();
        });

    return commander;
}
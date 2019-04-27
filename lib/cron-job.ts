import { Utils } from "./utils";

export interface Options {
    duration: number;
    timeout: () => number;
    action: () => Promise<boolean | undefined>;
}

export class Cron {

    private startTime: Date;
    private options: Options;
    private interval: NodeJS.Timeout | undefined;

    constructor(options: Options) {
        this.startTime = new Date();
        this.options = options;
    }

    start() {
        this.interval = setInterval(this.cron.bind(this), this.options.timeout());
    }


    stop() {
        this.interval && clearInterval(this.interval);
    }

    private continue(result: boolean | undefined) {
        const difference = Utils.differneceInHours(this.startTime, new Date());

        const cont = (
            result &&
            difference < this.options.duration
        );

        if (!cont) {
            console.log('Duration met stopping bot...')
        }

        return cont;
    }

    private async cron() {
        const result = await this.options.action();

        this.stop();

        if (this.continue(result)) {
            this.interval = setInterval(this.cron.bind(this), this.options.timeout());
        }
    }

}
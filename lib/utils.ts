import { CommanderStatic } from "commander";

import { Config } from "..";
import { Actions, Action } from "./actions";
import { Twitter } from "twit";

interface Timeout {
    min: number;
    max: number;
}

export class Utils {

    static randomIndex<T>(arr: T[]) {
        const index = Math.floor(arr.length * Math.random());

        return arr[index];
    }

    static differneceInHours(date1: any, date2: any) {
        return Math.abs(date1 - date2) / 36e5;
    }

    static getUserOptions(config: Config) {
        console.log('Your options --🐦')

        for (const option of Object.keys(config)) {
            console.log(option, config[option])
        }

        return config;
    }

    static getRandomAction(actions: Actions, { query, actions: keys }: Config) {
        let count = 0;

        return async () => {
            const key: string = Utils.randomIndex<string>(keys);

            console.log('round', count++)

            const tweet: Twitter.Status = await actions.fetchRandomTweet(query);

            console.log('selected action', key)

            const action = actions[key] as Action;
            const bound = action.bind(actions);
            const result = await bound(tweet);

            return result;
        }
    }

    static getRandomTimeout({ min, max }: Timeout) {
        return () => Math.max(Math.floor(Math.random() * max), min);
    }

}
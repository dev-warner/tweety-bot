#!/usr/bin/env node

import { CommanderStatic } from 'commander';

import { bot } from './lib/bot';
import { cli } from './lib/cli';
import { Utils } from './lib/utils';
import { Cron, Options } from './lib/cron-job';

require('dotenv').config();

console.log('starting tweety bot 🐦');

(async function botMcBotFace() {
    const { max, min, duration, actions, query }: CommanderStatic = cli();
    const options = Utils.getUserOptions({ max, min, duration, actions, query });
    const tweetService = bot();

    const opts: Options = {
        action: Utils.getRandomAction(tweetService, options),
        timeout: Utils.getRandomTimeout({ min, max }),
        duration
    };

    const cron = new Cron(opts);

    try {
        cron.start();

        setTimeout(() => console.log('👤  what u lookin at m8--🐦'), 2000)
    }

    catch (error) {
        console.log('tweety bot died in the pits 🐦', error)

        cron && cron.stop();
    }
})()



export type ActionKeys = ['follow', 'like', 'retweet'];

export interface Config {
    query: string;
    max: number;
    min: number;
    duration: number;
    actions: ActionKeys;

    [key: string]: string | number | ActionKeys;
}


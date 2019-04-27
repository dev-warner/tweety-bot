import Twit from 'twit';

import { Actions } from "./actions";
import { Config } from '..';

export function bot() {
    const actions = new Actions({
        twit: new Twit({
            consumer_key: process.env.consumer_key as string,
            consumer_secret: process.env.consumer_secret as string,
            access_token: process.env.access_token,
            access_token_secret: process.env.access_token_secret,
            timeout_ms: 60 * 1000,
            strictSSL: true,
        })
    });

    return actions;
}
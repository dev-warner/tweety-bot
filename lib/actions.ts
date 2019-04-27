import Twit, { Twitter } from 'twit';

import { Utils } from './utils';
import { Config } from '..';


export class Actions {

    private twit: Twit;

    [key: string]: Action | Twit | Config | Function;

    constructor({ twit }: ActionParams) {
        this.twit = twit;
    }

    public async fetchRandomTweet(q: string) {
        console.log('fetching random tweet');

        const { data } = (
            await this.twit.get('search/tweets', { q }) as Search
        );

        console.log('got tweets');

        const tweets: Twitter.Status[] = data.statuses;
        const tweet = Utils.randomIndex<Twitter.Status>(tweets)

        return tweet;
    }

    public async like(tweet: Twitter.Status) {
        if (typeof tweet != 'undefined') {

            if (!tweet.favorited) {
                console.log('liking tweet', tweet.id_str);
                await this.twit.post('favorites/create', { id: tweet.id_str });
                console.log('liked tweet', tweet.id_str, tweet.user.name);
                console.log('Post', tweet.text);
            } else {
                console.log('already liked', tweet.id_str);
            }

            return true;
        }

        return false;
    }

    public async follow(tweet: Twitter.Status) {
        if (typeof tweet != 'undefined') {
            const target = tweet.user.id_str;


            if (!tweet.user.following) {
                console.log('following user', tweet.user.id_str);
                await this.twit.post('friendships/create', { id: target });
                console.log('followed user', tweet.user.id_str, tweet.user.name);
                console.log(tweet.user.status);
            } else {
                console.log('already following', tweet.user.id_str);
            }

            return true;
        }

        return false;
    }

    async retweet(tweet: Twitter.Status) {
        if (typeof tweet != 'undefined') {

            if (!tweet.retweeted) {
                console.log('retweeting tweet', tweet.id_str);
                await this.twit.post('statuses/retweet/:id', { id: tweet.id_str });
                console.log('retweeted tweet', tweet.id_str);
                console.log(tweet.text);
            } else {
                console.log('already retweeted', tweet.id_str);
            }

            return true;
        }

        return false;
    }

}

export type Action = (tweet: Twitter.Status) => Promise<boolean | undefined>;

export interface ActionParams {
    twit: Twit;
}

export type Search = { data: Twitter.SearchResults };
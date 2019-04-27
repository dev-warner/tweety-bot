# Tweety bot

Usage: tweety-bot [options]

Options:
  -V, --version        output the version number
  -q, --query <value>  Add query example: -q #javascript (default: "#javascript")
  -s --min [n]         Add min amount of time to wait before each action example: -s 2500 (default: 2500)
  -l --max [n]         Add max amount of time to wait before each action example: -l 240000 (default: 240000)
  -d --duration [n]    Duration in hours example: -d 24 (default: 1)
  -a --actions <list>  Actions to use example: -a like, follow (default: [])
  -h, --help           output usage information


## Example usage

```
$ twitty-bot -q '#javascript' --min 1000 --max 60000 --duration 2 --actions follow,like

/*
 will start a bot that will run for 2 hours firing an action
 between 1 second and 1 minute and it will follow and like
*/
```
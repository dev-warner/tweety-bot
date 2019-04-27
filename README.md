# Tweety bot

Usage: tweety-bot [options]


```
Options:
  -V, --version        output the version number
  -q, --query <value>  Add query example: -q #javascript (default: "#javascript")
  -s --min [n]         Add min amount of time to wait before each action example: -s 2500 (default: 2500)
  -l --max [n]         Add max amount of time to wait before each action example: -l 240000 (default: 240000)
  -d --duration [n]    Duration in hours example: -d 24 (default: 1)
  -a --actions <list>  Actions to use example: -a like, follow (default: [])
  -h, --help           output usage information
```

## Example usage

 Fill in .env with your tokens below is an example

```
 https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html

 consumer_key = MI6oOYtyfsdgUWCDChkxCzlBe
 consumer_secret = Eu0rHZOpjUasdgadsJbBn51W1EH01IpZLH0WnWXgFfCsOjBuF2Dd1
 access_token = 874591962086731776-bNusasdgasdg7JqRH8xPww815Xfz1nxemti
 access_token_secret = 449g6XSu22F98Ah32523fagasMKArAimVuFS3h37BuiC2e1fIV
```

```
$ twitty-bot -q '#javascript' --min 1000 --max 60000 --duration 2 --actions follow,like

/*
 will start a bot that will run for 2 hours firing an action
 between 1 second and 1 minute and it will follow and like
*/
```
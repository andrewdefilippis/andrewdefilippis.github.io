---
title: One-Liner Persistent Rick Roll on Mac
date: 2023-03-03 09:30:00 +0000
categories: [Software Development, Shell]
tags: [tech, programming, linux, shell, script, one-liner, bash, zsh, sh, rickroll, rick, roll, apple, mac, macos]
image: /images/posts/2023-03-03-one-liner-persistent-rick-roll-on-mac/macintosh-computer-stock-photo.webp
---

That feeling that you get when Rickrolling someone, is bliss.  But what if you could Rickroll someone repeatedly, obscurely, and above all, absolutely annoyingly?

> I am not responsible for what you do with the information on this page and website.  Executing one-liners, scripts, or code that you did not write or do not understand is risky.  Executing code on another person's computer without their consent is malicious, and may be illegal.
{: .prompt-danger }

## Launching the Rickroll

The below one-liner triggers a wait condition for 1 hour, then begins an infinite loop of opening a webpage in the default browser, and waiting a random amount of time between 30 seconds and 3 minutes.  The process is disowned, allowing a terminal where this is executed to be closed.

```bash
$(sleep 3600; while true; do open -u "https://archive.org/download/rick-roll/Rick%20Roll.ia.mp4"; sleep $((30 + RANDOM % 150)); done) & disown
```

### What Each Command Does

* `sleep 3600` - Sleep for 3600 seconds (1 hour) before executing the following commands.
* `while true` - Loop infinitely until break/termination.
* `do` - Beginning of while loop body
* `open -u "https://archive.org/download/rick-roll/Rick%20Roll.ia.mp4"` - Open URL in the default browser.
* `sleep $((30 + RANDOM % 150))` - Sleep a random number of seconds between 30 and 180.
* `done` - End of the while loop body.
* `&` - Send process to background
* `disown` - Disown the process, so you can close the terminal.

## Terminating the Disowned Process

The parent 'zsh' process has to be terminated to break the Rickroll loop.

```bash
sleep_parents=$(ps -Ac -o ppid,comm | awk '/sleep/ {for(i=1; i<NF; i++) {print $1 | "xargs ps -p"}}'); echo "${sleep_parents}"
# PID TTY           TIME CMD
# 10010 ttys002    0:01.00 /bin/bash /usr/local/something/else
# 10101 ttys002    0:00.01 -zsh

zsh_parent_pid=$(echo "${sleep_parents}" | awk '/zsh/ {print $1}'); echo "${zsh_parent_pid}"
# 10101

kill -9 "${zsh_parent_pid}"
```

### What Each Command Does

#### Get Parents of Sleep Processes

* `sleep_parents=` - Variable creation and assignment.
* `$(` - Beginning of encapsulated shell commands to execute.
* `ps -Ac -o ppid,comm` - Display processes with the parent process ID and its command.
* `|` - Pipe output of previous command to input of following command.
* `awk '/sleep/ {for(i=1; i<NF; i++) {print $1 | "xargs ps -p"}}'` - Return output of parent process IDs with commands including the string 'sleep'.
  * `/sleep/` - Match the string 'sleep'.
  * `for(i=1; i<NF; i++)` - Loop over each line.
  * `print $1` - Print the value in the first column (separated by whitespace).
  * `|` - Pipe output of previous command to input of following command.
  * `"xargs ps -p"` - Return output with parent process IDs and commands using the output of the previous command.
* `)` - End of encapsulated shell commands.
* `echo "${sleep_parents}"` - Print to standard out (stdout) the value of variable sleep_parents.

#### Get ZSH Parent Process ID

* `zsh_parent_pid=` - Variable creation and assignment.
* `$(` - Beginning of encapsulated shell commands to execute.
* `echo "${sleep_parents}"` - Print to standard out (stdout) the value of variable sleep_parents.
* `|` - Pipe output of previous command to input of following command.
* `awk '/zsh/ {print $1}'` - Print the value in the first column (separated by whitespace) of the line including the string 'zsh'.
* `)` - End of encapsulated shell commands.
* `echo "${zsh_parent_pid}"` - Print to standard out (stdout) the value of variable zsh_parent_pid.

#### Terminate Parent Process

* `kill -9"` - Terminate process with `SIGKILL` signal.
* `"${zsh_parent_pid}"` - Variable containing the parent ZSH command process ID.

## FAQ

### In The Case It's Still Running

Save everything you were working on, and reboot.

### Why Would You Create This

1. For the lulz.
2. It's fun.
3. It's educational.
4. It's potentially malicious.
5. It's useful for reminding your colleagues that they shouldn't walk away from their computer without locking it.  But maybe use a picture of a unicorn, instead of an autoplaying movie.

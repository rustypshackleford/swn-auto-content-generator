# Stars Without Number Automatic Content Generator
An automatic content generation tool for Stars Without Number that runs through the command line interface

Stars Without Number © 2010, Sine Nomine Publishing and is written by Kevin Crawford. Grab the free rules here: https://www.drivethrurpg.com/product/86467/Stars-Without-Number-Free-Edition

You will need to have Node.js and npm installed to use this tool.

# Instructions to install Node.js and npm on your machine

## Step 1: Download Node.js

Open your web browser and go to the official Node.js website: https://nodejs.org/

On the homepage, you'll see two versions available for download: "LTS" (Long-Term Support) and "Current." For most users, it's recommended to download the LTS version, as it provides a stable and well-tested release. Click on the "LTS" button to download the latest LTS version.

## Step 2: Install Node.js

### Windows:

After downloading the installer, locate the downloaded file (usually in your "Downloads" folder) and double-click on it.

The Node.js Setup Wizard will appear. Click "Next" to start the installation.

Accept the license agreement and click "Next."

Choose the destination folder for Node.js (you can keep the default) and click "Next."

Leave the default components selected and click "Next."

In the "Select components" screen, ensure that "Automatically install the necessary tools..." is checked. Click "Next."

Choose the "Automatically" option for the "Select the components you want to install" screen. Click "Next."

Review the settings and click "Install" to begin the installation process.

Once the installation is complete, click "Finish" to close the wizard.

### macOS:

After downloading the macOS package (usually in your "Downloads" folder), locate it and double-click on it.

The installer will open. Follow the on-screen instructions and click "Continue" when prompted.

Read the license agreement, click "Continue," and then click "Agree" to accept the terms.

Choose the destination where you want to install Node.js, and then click "Continue."

Click "Install" to start the installation. You may be prompted to enter your computer's password.

The installation will begin, and you will see a progress bar. Once it's complete, click "Close."

### Linux (Ubuntu/Debian):

After downloading the Linux binaries (usually in your "Downloads" folder), open your terminal.

Navigate to the folder where the downloaded file is located using the cd command. For example:

bash
	cd ~/Downloads

Extract the downloaded archive using the following command:

tar -xvf node-vxx.x.x-linux-x64.tar.xz
Note: Replace vxx.x.x with the version number you downloaded.

Move the extracted files to the desired location. For example, you can move them to /usr/local/:

bash
	sudo mv node-vxx.x.x-linux-x64 /usr/local/
	Create a symbolic link to make Node.js and npm (Node Package Manager) accessible from the command line:

bash
	sudo ln -s /usr/local/node-vxx.x.x-linux-x64/bin/node /usr/local/bin/node
	sudo ln -s /usr/local/node-vxx.x.x-linux-x64/bin/npm /usr/local/bin/npm
	
## Step 3: Verify Installation
To verify that Node.js and npm are installed correctly, open a terminal or command prompt and type the following commands:

Copy code
node -v
npm -v
The version numbers of Node.js and npm should be displayed, confirming that the installation was successful.

Congratulations! You have successfully downloaded and installed Node.js on your system. You are now ready to start building applications using Node.js.

## Step 4: Install prompt-sync
Prompt-sync is a Node.js package that this program utilizes to prompt users for input. Without the prompt-sync package installed, the program will throw an error.

To install prompt-sync, navigate to the project folder in your CLI (see instructions below if you need help navigating to the project folder) and then type 'npm install prompt-sync' and hit enter. The package will install itself and you should then be able to run the program without any errors.

# Instructions for using this tool

Once you've installed Node.js and npm on your computer, using this tool is as simple as navigating to the folder that contains the project files in your CLI (Command Line Interface) via the cd command and running 'npm start'

For example, if my project folder was located in C:/Users/myUserName/Downloads/swn-auto-content-generator I would do the following:

1. Start up a CLI instance with my program of choice (Git Bash for me)

2. The CLI instance may not start me in the right place to cd into this folder, so I will use 'cd ..' to exit up one level until I reach a folder that contains the one I'm looking for. Let's say I've used 'cd ..' to go up one leve until I reach C:/Users/myUserName/

3. Once I reach a folder that I can correctly cd into, I will use the command with the folder name to enter it. 'cd Downloads' will put me into the Downloads folder, and likewise 'cd swn-auto-content-generator' will put me into the folder containing the project files. Terminals will vary in how they indicate this, but you should see something like '~/swn-auto-content-generator' in front of where your cursor is blinking to indicate that you've entered the right folder.

4. At this point all you need to do is type 'npm start' and hit enter, and the program will run!

5. Once you've exited the program, a file named 'generateOutput.txt' will have been generated in the project folder that contains the content from your most recent session. IMPORTANT: This file is overwritten every time you use the program, so if you just generated something that you want to hold onto it is essential that you save that content off into a different file, ideally your master notes file for your sector, before running the program again. The program provides real-time updates to the list of content it has generated as you're using it, so you can keep track of what has already been created in a session. Enjoy!

# License

The Stars Without Number Toolbox is licensed under the MIT License:

Copyright (c) 2017 Steve Simenic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
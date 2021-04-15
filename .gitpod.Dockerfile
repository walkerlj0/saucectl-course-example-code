FROM gitpod/workspace-full-vnc

USER gitpod

# Install Google Key
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add
RUN sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

# Install Google Chrome
RUN sudo apt-get update \
  && sudo apt-get install -y google-chrome-stable \
  && sudo rm -rf /var/lib/apt/lists/*

# Install Node/NPM
# RUN sudo apt-get install -y npm \
# && sudo apt-get install -y build-essential

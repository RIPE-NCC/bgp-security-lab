Vagrant-based personal network lab - BGP Security
=================================================

This is a small self contained lab for playing with BGP security. It uses [VirtualBox](https://www.virtualbox.org/) to run a virtual
Linux server hosting a few [LXD](https://linuxcontainers.org/lxd/) containers
running Ubuntu Linux. For a convenient access to
the consoles of the virtual routers, [ttyd](https://github.com/tsl0922/ttyd) is
used to provide web-based terminal access.

The lab is highly customizable using [Vagrant](https://www.vagrantup.com/) to
provide the virtual server and [Ansible](https://www.ansible.com/) to do the
configuration. It should work on Windows, macOS and Linux.

Installation of the development version
---------------------------------------

  1. Install [VirtualBox](https://www.virtualbox.org/)
  2. Install [Vagrant](https://www.vagrantup.com/)
  3. Clone or download and unpack [the ZIP](https://github.com/oskar456/bgpsec-netlab/archive/refs/heads/main.zip) (for instance into `~/ripencc/bgpseclab`)
  4. Open a terminal window, enter the empty directory (using `cd` command) directory and run `vagrant up`
  5. Wait a few minutes until vagrant finishes downloading the VM image and
     installing everything.
  6. Access the lab environment by pointing your web browser to [`http://localhost:8080/`](http://localhost:8080/)
  
Stopping, restarting and destroying the lab
-------------------------------------------

Then, you can turn off the VM by running `vagrant halt` in the same directory
you run `vagrant up` before. You can use the latter command to restart the lab
later.

You can destroy the lab environment by issuing `vagrant destroy`. A subsequent
call of `vagrant up` will bring up a completely fresh environment.


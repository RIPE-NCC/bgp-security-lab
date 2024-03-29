# Changelog

## [0.20230331.0](https://www.github.com/RIPE-NCC/bgp-security-lab/compare/v0.20230123.0...v0.20230331.0) (2023-03-31)


### Features

* support Ubuntu autoinstall ([c399387](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/c399387e8c5faf504b98f26c49b47a193d5bdbb1))


### Bug Fixes

* do not depend on user name `vagrant` ([024f356](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/024f3562f23bbe85be6a8ef359190013008263be))
* drop hard dependencies for x86_64 ([ad1d21c](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/ad1d21c9c255de8115b19ea933ca8f42d64c70c6))
* frontend update ([4de5357](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/4de53570c293daf677a30a85c7dd6662fc50007a))
* remove obsolete ansible options ([fe35c73](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/fe35c7335229cca1d9f2370f29051addb2b1ecf1))

## 0.20230123.0 (2023-01-23)


### Features

* add bgpq4 ([7db62d4](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/7db62d4c4946ab79e4123d94cd2c8d8835f9d2cc))
* add logs output terminals ([a45261f](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/a45261fdc7fafe2759dbd9fd88de8ceabb234cf9))
* add Vagrantfile-in-box to be part of the box ([526e619](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/526e619ac00eb774e438eef8bc8865b6f4b3fe89))
* Disable multicast snooping on lxdbr0 by default ([2580b2c](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/2580b2c63d704a147e5dcc7c1a54bebe9040b9ae))
* fixed MAC address of the virtual router ([520f09a](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/520f09a4fc51470254a39873069b03dc9190bc14))
* frontend update ([c47e88e](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/c47e88eeacd48ee296ee9ab67a61aea1c87e59ad))
* replace the frontend with a RIPE NCC styled one ([a10183f](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/a10183f9f388a4b1690a015f0e79cdf7dae48760))
* switch to ubuntu/focal64 base box ([5fa8f70](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/5fa8f70003cbe54eefdb142833dbb66bbcfa1615))
* update Termshark to 2.3.0 ([5026edc](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/5026edc61a88618dca4a72c718e22bd21ddccd92))
* Use Ubuntu 22.04 LTS ([8bdca76](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/8bdca76d645ec4d9886853653ffd991cde668e06))


### Bug Fixes

* ansible-base got renamed to ansible-core ([b7f39c0](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/b7f39c0a90c4f0ec29b1d17c291c38cb83e73d07))
* disable shared folder, workaround serial port issue on Windows ([5938407](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/5938407dcd8921839591ce9ae16018cb160d53ff))
* ensure exact version of base box ([972b4e1](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/972b4e1125cf4566d37b71e51d02bd81b05d41c0))
* frontend: small adjustments ([bb221aa](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/bb221aa61c429c2f95e869259449234ebb5f73fb))
* frontend: Workaround broken iframe resize on Firefox ([0cbdbc6](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/0cbdbc61ae4afac4212f4c0c9d01310d95502218))
* update web frontend to the latest version ([6c213b9](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/6c213b9214a017442f49353adc1a06aa603a3bdb))
* use macos-10.15 in GitHub action ([741758c](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/741758cc50ea57b23fbd97d26f78e7c7988418cb))
* Use rsync instead of shared folders ([ee1de25](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/ee1de255f5780d974aa88b59f2293855014c6e65))
* workaround ignored ICMPv6 redirects ([60313d1](https://www.github.com/RIPE-NCC/bgp-security-lab/commit/60313d14532f414794289dcbcee06caf3be99f60))

### [0.20211020.1](https://www.github.com/RIPE-NCC/ipv6-security-lab/compare/v0.20211020.0...v0.20211020.1) (2021-10-20)


### Bug Fixes

* use macos-10.15 in GitHub action ([741758c](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/741758cc50ea57b23fbd97d26f78e7c7988418cb))

## [0.20211020.0](https://www.github.com/RIPE-NCC/ipv6-security-lab/compare/v0.20210814.0...v0.20211020.0) (2021-10-20)


### Features

* update Termshark to 2.3.0 ([5026edc](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/5026edc61a88618dca4a72c718e22bd21ddccd92))


### Bug Fixes

* ansible-base got renamed to ansible-core ([b7f39c0](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/b7f39c0a90c4f0ec29b1d17c291c38cb83e73d07))
* update web frontend to the latest version ([6c213b9](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/6c213b9214a017442f49353adc1a06aa603a3bdb))
* Use rsync instead of shared folders ([ee1de25](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/ee1de255f5780d974aa88b59f2293855014c6e65))

## [0.20210814.0](https://www.github.com/RIPE-NCC/ipv6-security-lab/compare/v0.20210813.0...v0.20210814.0) (2021-08-17)


### Features

* Disable multicast snooping on lxdbr0 by default ([2580b2c](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/2580b2c63d704a147e5dcc7c1a54bebe9040b9ae))
* frontend update ([c47e88e](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/c47e88eeacd48ee296ee9ab67a61aea1c87e59ad))


### Bug Fixes

* disable shared folder, workaround serial port issue on Windows ([5938407](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/5938407dcd8921839591ce9ae16018cb160d53ff))

## [0.20210813.0](https://www.github.com/RIPE-NCC/ipv6-security-lab/compare/v0.20210709.0...v0.20210813.0) (2021-08-13)


### Bug Fixes

* ensure exact version of base box ([972b4e1](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/972b4e1125cf4566d37b71e51d02bd81b05d41c0))
* workaround ignored ICMPv6 redirects ([60313d1](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/60313d14532f414794289dcbcee06caf3be99f60))

## 0.20210709.0 (2021-07-09)


### Features

* add Vagrantfile-in-box to be part of the box ([526e619](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/526e619ac00eb774e438eef8bc8865b6f4b3fe89))
* fixed MAC address of the virtual router ([520f09a](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/520f09a4fc51470254a39873069b03dc9190bc14))
* replace the frontend with a RIPE NCC styled one ([a10183f](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/a10183f9f388a4b1690a015f0e79cdf7dae48760))
* switch to ubuntu/focal64 base box ([5fa8f70](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/5fa8f70003cbe54eefdb142833dbb66bbcfa1615))


### Bug Fixes

* frontend: small adjustments ([bb221aa](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/bb221aa61c429c2f95e869259449234ebb5f73fb))
* frontend: Workaround broken iframe resize on Firefox ([0cbdbc6](https://www.github.com/RIPE-NCC/ipv6-security-lab/commit/0cbdbc61ae4afac4212f4c0c9d01310d95502218))

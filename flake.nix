{
  description = "A Nix Flake for web development and with React and Typescript";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, ... }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { 
          inherit system; 
          config.allowUnfree = true;
        };

        # Dependencies for development that are not system packages, but still required for development (eg; z3 and JDK)
        DevDependencies = with pkgs; [
          tmux
          python3
          ripgrep
          gh
          drawio
          herdr
          opencode
          obsidian
          nodejs_26
          typescript-language-server
          uv
          vscode
          (python3.withPackages (ps: with ps; [ 
            # python dependencies
            pytest 
            numpy
          ]))
          ruff
          vscode-langservers-extracted
        ];

        # System libraries go here (e.g. openssl, pkg-config)
        MedievalDependencies = with pkgs; [
          clang-tools
          libclang
          pkg-config
        ];

        clangMkShell = pkgs.mkShell.override { stdenv = pkgs.clangStdenv; };

      in
      {
        devShells.default = clangMkShell {
          buildInputs = with pkgs; [
          ] ++ MedievalDependencies ++ DevDependencies;

          LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
          ];
          # Fixes rust-analyzer looking for standard library source code
          RUST_SRC_PATH = pkgs.rustPlatform.rustLibSrc;
          LIBCLANG_PATH="${pkgs.llvmPackages.libclang.lib}/lib";
          shellHook = ''
            export PATH="${pkgs.clangStdenv.cc}/bin:$PATH";
          '';
        };
      });
}


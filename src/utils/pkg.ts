import { execa } from "execa";
import ora from "ora";

export async function installPackages(pkgs: string[], cwd = process.cwd()) {
	const spinner = ora(`Installing ${pkgs.join(", ")}...`).start();
	try {
		await execa("npm", ["install", "--legacy-peer-deps", ...pkgs], {
			cwd,
			stdio: "pipe",
		});
		spinner.succeed(`Installed ${pkgs.join(", ")}`);
	} catch (error) {
		spinner.fail(`Failed to install ${pkgs.join(", ")}`);
		throw error;
	}
}

export async function installDevPackages(pkgs: string[], cwd = process.cwd()) {
	const spinner = ora(`Installing dev dependencies: ${pkgs.join(", ")}...`).start();
	try {
		await execa("npm", ["install", "--save-dev", "--legacy-peer-deps", ...pkgs], {
			cwd,
			stdio: "pipe",
		});
		spinner.succeed(`Installed dev dependencies: ${pkgs.join(", ")}`);
	} catch (error) {
		spinner.fail(`Failed to install dev dependencies: ${pkgs.join(", ")}`);
		throw error;
	}
}

import { execa } from "execa";
import ora from "ora";

export async function runCommand(command: string, args: string[] = []) {
	return execa(command, args);
}

export async function runCommandWithSpinner(command: string, args: string[] = [], message: string) {
	const spinner = ora(message).start();
	try {
		const result = await execa(command, args, { stdio: "pipe" });
		spinner.succeed(message.replace("...", ""));
		return result;
	} catch (error) {
		spinner.fail(`Failed: ${message}`);
		throw error;
	}
}

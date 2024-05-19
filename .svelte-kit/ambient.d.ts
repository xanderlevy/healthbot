
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const CSB_SANDBOX_ID: string;
	export const CSB: string;
	export const CSB_EXEC_ID: string;
	export const USER: string;
	export const PITCHER_CLIENTS_WSS_PORT: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const NODE_VERSION: string;
	export const SUPERVISOR_GROUP_NAME: string;
	export const npm_config_bin_links: string;
	export const HOSTNAME: string;
	export const YARN_VERSION: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_init_version: string;
	export const SHLVL: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const NVM_SYMLINK_CURRENT: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const PERMISSION_WATCHER_VERSION: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_init_license: string;
	export const npm_config_cache_folder: string;
	export const PAGER: string;
	export const CSB_WORKSPACE_PATH: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const FNM_ARCH: string;
	export const LC_CTYPE: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const npm_package_scripts_check: string;
	export const npm_config_engine_strict: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const npm_package_readmeFilename: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const FNM_LOGLEVEL: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const _: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const PROJECT_GID: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_config_prefix: string;
	export const PNPM_VERSION: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies__types_cookie: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const WORKSPACE_PATH: string;
	export const NPM_CONFIG_STORE_DIR: string;
	export const npm_config_cache: string;
	export const WATCHMAN_VERSION: string;
	export const PITCHER_BIN_PATH: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_version: string;
	export const PATH: string;
	export const NODE: string;
	export const PITCHER_WORKSPACE_PATH: string;
	export const YARN_CACHE_FOLDER: string;
	export const npm_package_name: string;
	export const npm_config_store_dir: string;
	export const ZSH_DISABLE_COMPFIX: string;
	export const npm_package_devDependencies_eslint: string;
	export const LS_COLORS: string;
	export const FNM_DIR: string;
	export const SUPERVISOR_ENABLED: string;
	export const npm_lifecycle_script: string;
	export const FNM_RESOLVE_ENGINES: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const PITCHER_API_BASE_URL: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const CSB_BASE_PREVIEW_HOST: string;
	export const PITCHER_ENV: string;
	export const CSB_PITCHER_MANAGER_BASE_URL: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const SUPERVISOR_SERVER_URL: string;
	export const npm_config_strict_ssl: string;
	export const SUPERVISOR_PROCESS_NAME: string;
	export const npm_package_scripts_format: string;
	export const CODESANDBOX_HOST: string;
	export const FNM_MULTISHELL_PATH: string;
	export const NPM_CONFIG_CACHE: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const FNM_COREPACK_ENABLED: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_scripts_preview: string;
	export const INIT_CWD: string;
	export const NVM_RC_VERSION: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		CSB_SANDBOX_ID: string;
		CSB: string;
		CSB_EXEC_ID: string;
		USER: string;
		PITCHER_CLIENTS_WSS_PORT: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		NODE_VERSION: string;
		SUPERVISOR_GROUP_NAME: string;
		npm_config_bin_links: string;
		HOSTNAME: string;
		YARN_VERSION: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_config_init_version: string;
		SHLVL: string;
		HOME: string;
		OLDPWD: string;
		LESS: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		NVM_SYMLINK_CURRENT: string;
		ZSH: string;
		LSCOLORS: string;
		PERMISSION_WATCHER_VERSION: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_init_license: string;
		npm_config_cache_folder: string;
		PAGER: string;
		CSB_WORKSPACE_PATH: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		FNM_ARCH: string;
		LC_CTYPE: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		npm_package_scripts_check: string;
		npm_config_engine_strict: string;
		npm_package_description: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		npm_package_readmeFilename: string;
		FNM_VERSION_FILE_STRATEGY: string;
		FNM_LOGLEVEL: string;
		npm_package_devDependencies_prettier: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_type: string;
		_: string;
		FNM_NODE_DIST_MIRROR: string;
		PROJECT_GID: string;
		npm_package_scripts_check_watch: string;
		npm_config_prefix: string;
		PNPM_VERSION: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies__types_cookie: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		WORKSPACE_PATH: string;
		NPM_CONFIG_STORE_DIR: string;
		npm_config_cache: string;
		WATCHMAN_VERSION: string;
		PITCHER_BIN_PATH: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_config_ignore_scripts: string;
		npm_config_version: string;
		PATH: string;
		NODE: string;
		PITCHER_WORKSPACE_PATH: string;
		YARN_CACHE_FOLDER: string;
		npm_package_name: string;
		npm_config_store_dir: string;
		ZSH_DISABLE_COMPFIX: string;
		npm_package_devDependencies_eslint: string;
		LS_COLORS: string;
		FNM_DIR: string;
		SUPERVISOR_ENABLED: string;
		npm_lifecycle_script: string;
		FNM_RESOLVE_ENGINES: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		PITCHER_API_BASE_URL: string;
		npm_config_argv: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		CSB_BASE_PREVIEW_HOST: string;
		PITCHER_ENV: string;
		CSB_PITCHER_MANAGER_BASE_URL: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		SUPERVISOR_SERVER_URL: string;
		npm_config_strict_ssl: string;
		SUPERVISOR_PROCESS_NAME: string;
		npm_package_scripts_format: string;
		CODESANDBOX_HOST: string;
		FNM_MULTISHELL_PATH: string;
		NPM_CONFIG_CACHE: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		FNM_COREPACK_ENABLED: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_scripts_preview: string;
		INIT_CWD: string;
		NVM_RC_VERSION: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

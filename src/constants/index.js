const APP_CONSTANTS = {
  WIDTH: 943,
  HEIGHT: 360,
}

const MESSAGING_CONSTANTS = {
  ERROR: 'VVG_ERROR',
  INFO: 'VVG_MESSAGE',
  SUCCESS: 'VVG_SUCCESS',
  DELETE: 'VVG_DELETE',
  PUSH: 'VVG_PUSH',
  SAVE: 'VVG_SAVE',
  GENERATE: 'VVG_GENERATE',
  UPDATE: 'VVG_UPDATE',
  UPDATED: 'VVG_UPDATED',
  CONFIG: 'VVG_CONFIG',
}

const MESSAGES = {
  NO_CHANGE: 'Configuration unchanged',
  SAVED: 'Configuration saved',
  UPDATED: 'Configuration updated',
  DELETED: 'Configuration deleted',
  WIPED: 'Grid wiped',
  DOWNLOADED: 'Shell script downloaded',
  GENERATING: 'Generating shell script',
  PUSHING: 'Generating and pushing commits',
  PUSHED: 'Commits pushed',
  LOADED: 'Configuration loaded',
  CHECKING: 'Validating configuration',
  SETTINGS: 'Settings updated',
  BRANCH: 'Branch does not exist',
  USERNAME: 'Username does not exist',
  REPO: 'Repository does not exist',
  GIT: 'Git not installed',
  EMPTY: 'Repository not empty',
}

module.exports = {
  APP_CONSTANTS,
  MESSAGING_CONSTANTS,
  MESSAGES,
}

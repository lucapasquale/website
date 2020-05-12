import React, { FC } from 'react'

import { light, dark } from './colors'

// https://joshwcomeau.com/gatsby/dark-mode

export const InjectVariables: FC = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference =
      window.localStorage.getItem('color-mode');
    const hasPersistedPreference =
      typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;

  root.style.setProperty(
    '--color-primary',
    colorMode === 'light'
      ? '${light.primary}'
      : '${dark.primary}'
  );

  root.style.setProperty(
    '--color-secondary',
    colorMode === 'light'
      ? '${light.secondary}'
      : '${dark.secondary}'
  );

  root.style.setProperty(
    '--color-link',
    colorMode === 'light'
      ? '${light.link}'
      : '${dark.link}'
  );

  root.style.setProperty(
    '--color-background',
    colorMode === 'light'
      ? '${light.background}'
      : '${dark.background}'
  );

  root.style.setProperty(
    '--color-secondary-background',
    colorMode === 'light'
      ? '${light.secondaryBackground}'
      : '${dark.secondaryBackground}'
  );

  root.style.setProperty('--initial-color-mode', colorMode);
})()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

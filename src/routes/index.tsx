import React, { FC } from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { DarkThemeContext } from '../helpers/contexts/dark-theme'
import { StyledContext } from '../helpers/contexts/styled'

import { Home } from './Home'
import { Projects } from './Projects'
import { Secrets } from './Secrets'

export const Routes: FC = () => (
  <DarkThemeContext.Provider>
    <StyledContext>
      <BrowserRouter>
        <Switch>
          <Route exact key="/" path="/" component={() => <Home />} />
          <Route
            exact
            key="/projects"
            path="/projects"
            component={() => <Projects />}
          />
          <Route
            exact
            key="/secrets"
            path="/secrets"
            component={() => <Secrets />}
          />
        </Switch>
      </BrowserRouter>
    </StyledContext>
  </DarkThemeContext.Provider>
)

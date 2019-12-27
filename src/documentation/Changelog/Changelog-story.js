/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';
import Changelog from '../../../CHANGELOG.md';

import ReactMarkdown from 'react-markdown';
import './_changelog.scss';

console.log(Changelog);

storiesOf('Getting started|Getting started', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add("What's new (Changelog)", () => (
    <Page title="Changelog" subTitle="Latest updates and versions">
      <Blockquote title="UI-Kit 1.4 is available" kind="warning">
        We've just release the new version of the UI Kit. Get the{' '}
        <Link href="https://www.npmjs.com/package/@wfp/ui" target="_blank">
          latest version
        </Link>{' '}
        now or read the{' '}
        <Link
          href="https://github.com/wfp/ui/blob/next/CHANGELOG.md"
          target="_blank">
          full changelog.
        </Link>
      </Blockquote>

      <div className="changelog">
        <ReactMarkdown source={Changelog} />
      </div>
      {/*<div dangerouslySetInnerHTML={createMarkup()} />*/}
    </Page>
  ));

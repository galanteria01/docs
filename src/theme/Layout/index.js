/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import { ThemeClassNames } from '@docusaurus/theme-common';
import './styles.css';
import { defineCustomElements } from '@dyte-in/ui-kit/loader';

function Layout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;
  useKeyboardNavigation();

  useEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div
        className={clsx(
          ThemeClassNames.wrapper.main,
          wrapperClassName,
          pageClassName
        )}
      >
        {children}
      </div>

      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}

export default Layout;

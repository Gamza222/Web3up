import React, { useEffect, useMemo, useRef } from 'react';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';

import { classNames } from 'shared/lib/classNames/classNames';
import { DimensionsContext } from './providers/DimensionProvider/DimensionsProvider';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';
import { AppRouter } from './providers/Router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const appRef = useRef(null);
  const appRect = useElementRect(appRef);
  const { width, height } = useWindowDimensions();
  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
      appRect,
    }),
    [width, height, appRect],
  );

  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     setInterval(() => {
  //       return dispatch(counterActions.increment());
  //     }, 1000);
  //   });

  return (
    <DimensionsContext.Provider value={dimensionsProps}>
      <div className={classNames('app', {}, [])} ref={appRef}>
        {/* {width > 1200 ? <Navbar /> : <NavbarMobile />} */}

        <div className='content-page'>
          <AppRouter />
        </div>
      </div>
    </DimensionsContext.Provider>
  );
};

export default App;

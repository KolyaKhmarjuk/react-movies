import React from 'react';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';

const GoBackButton = props => {
  const history = useHistory();
  const location = useLocation();

  const hendelGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      <button type="button" onClick={hendelGoBack}>
        Go back
      </button>
    </>
  );
};

export default GoBackButton;

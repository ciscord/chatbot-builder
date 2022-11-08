import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { CalendarOutlined } from '@ant-design/icons';

import { flowActions } from '../../../redux/flowActions/actions';
import { currentFunctionActions } from '../../../redux/currentFunction/actions';
import { modalsActions } from '../../../redux/modals/actions';
import { selectFunctionByID } from '../../../redux/flowActions/selectors';
import { selectUser } from '../../../redux/auth/selectors';

import { ItemMenu } from '../../../components/ItemMenu';
import { Wrapper } from './FunctionBox.style';

const menuItems = [
  { key: 'edit', title: 'Edit Function' },
  { key: 'delete', title: 'Delete Function' },
];

const FunctionBox = ({ id }) => {

  const dispatch = useDispatch();
  const functionData = useSelector(selectFunctionByID(id), shallowEqual);
  const { name } = useSelector(selectUser);

  const onClickMenu = useCallback((key) => {
    switch (key) {
      case 'edit': {
        dispatch(currentFunctionActions.baseDataRefresh(functionData));
        dispatch(modalsActions.functionShow());
        break;
      }
      case 'delete': {
        dispatch(flowActions.functionRemove(id));
        break;
      }
      default:
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="top">
        <div className="name">{functionData.name}</div>
        <div className="settings">
          <ItemMenu
            items={menuItems}
            onClick={onClickMenu}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="date">
          <CalendarOutlined />
          {moment().format('YYYY-MM-DD HH:mm')}
        </div>
        <div className="user">{name.slice(0, 1).toUpperCase()}</div>
      </div>
    </Wrapper>
  );
};

FunctionBox.propTypes = {
  id: PropTypes.string,
};

FunctionBox.defaultProps = {
  id: '',
};

export default FunctionBox;
export { FunctionBox };

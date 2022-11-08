import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SelectUtils } from '../../../utils/SelectUtils';

import { breadcrumbsActions } from '../../../redux/breadcrumbs/actions';
import { dataFlowActions } from '../../../redux/dataFlow/actions';
import { selectList } from '../../../redux/projects/selectors';
import { selectDataFlowUI } from '../../../redux/breadcrumbs/selectors';

import { Select, MultiSelect } from '../../../lib/ui';

import { Wrapper } from './DataFlowForms.style';

const DataFlowForms = () => {

  const dispatch = useDispatch();
  const projectsList = useSelector(selectList, shallowEqual);
  const { projectID, taskIDs, tasksList } = useSelector(selectDataFlowUI, shallowEqual);

  const onChangeProject = useCallback((value) => {
    dispatch(breadcrumbsActions.dataFlowTasksListReload(value));
    dispatch(dataFlowActions.listReload(value));
  }, [dispatch]);

  const onChangeTasks = useCallback((value) => {
    dispatch(breadcrumbsActions.dataFlowUIMerge({
      taskIDs: value,
    }));
    if (value.length > 0) {
      const taskID = value[0];
      dispatch(dataFlowActions.dataFlowParse(taskID));
    } else {
      dispatch(dataFlowActions.dataFlowClear());
    }
  }, [dispatch]);

  const projectOptions = SelectUtils.createOptions(projectsList, 'id', 'name');
  const taskOptions = SelectUtils.createOptions(tasksList, 'id', 'title');

  return (
    <Wrapper>
      <div className="delimiter">/</div>
      <Select
        type="integer"
        value={projectID}
        options={projectOptions}
        onChange={onChangeProject}
      />
      <div className="delimiter">/</div>
      <MultiSelect
        type="integer"
        disabled={!projectID}
        value={taskIDs}
        options={taskOptions}
        onChange={onChangeTasks}
      />
    </Wrapper>
  );
};

export default DataFlowForms;
export { DataFlowForms };

import { GlobalStoreContext } from '@app/stores';
import { useI18n } from 'agora-common-libs';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

export const useQuitConfirm = () => {
  const homeStore = useContext(GlobalStoreContext);
  const history = useHistory();
  const transI18n = useI18n();

  useEffect(() => {
    const unregister = history.block(() => {
      if (!window.confirm(transI18n('fcr_room_tips_leave_room'))) {
        history.goForward();
        return false;
      }
    });

    homeStore.blockQuitUnregister = unregister;
    return unregister;
  }, []);
};

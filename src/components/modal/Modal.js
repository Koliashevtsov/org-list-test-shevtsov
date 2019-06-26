import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FolItem from '../fol-item/FolItem';
import Portal from '../portal/Portal';

import './modal.css';

function Modal(props) {
  const { isModal, isFollowers, isFollows, item, followersList, followsList } = props
  return (
    <Fragment>
      { isModal &&
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-header">
                <p>{item.login} followers</p>
                <button type="button" className="modal-header-b">&times;</button>
              </div>
              <div className="modal-body">
                { isFollowers &&
                  followersList.map(itemFol => (
                  <ul key={itemFol.id}>
                    <FolItem item={itemFol} />
                  </ul>
                ))}
                { isFollows &&
                  followsList.map(itemFol => (
                  <ul key={itemFol.id}>
                    <FolItem item={itemFol} />
                  </ul>
                ))}

              </div>
            </div>
          </div>
        </Portal>
    }
    </Fragment>
  );
}
Modal.propTypes = {
  isModal: PropTypes.bool,
  isFollowers: PropTypes.bool,
  isFollows: PropTypes.bool,
  item: PropTypes.object,
  followersList: PropTypes.array,
  followsList: PropTypes.array
}

export default Modal;

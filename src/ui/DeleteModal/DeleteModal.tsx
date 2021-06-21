import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, Text } from '@thegrinder/ui';

import messages from './messages';

export type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const DeleteModal = ({ isOpen, onClose, onConfirm }: DeleteModalProps) =>
  isOpen ? (
    <Modal isOpen={isOpen} onRequestClose={close}>
      <div>
        <Text as="h4" className="mb-4">
          <FormattedMessage {...messages.title} />
        </Text>
        <Text as="p">
          <FormattedMessage {...messages.content} />
        </Text>
        <div className="flex flex-row flex-wrap justify-end -mx-2 mt-6">
          <div className="px-2">
            <Button emphasis="medium" onClick={onClose}>
              <FormattedMessage {...messages.cancel} />
            </Button>
          </div>
          <div className="px-2">
            <Button variant="danger" emphasis="high" onClick={onConfirm}>
              <FormattedMessage {...messages.confirm} />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  ) : null;

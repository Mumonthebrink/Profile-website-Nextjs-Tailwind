import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex items-center justify-center z-50" onClose={onClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
          <div className="mt-4">{children}</div>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

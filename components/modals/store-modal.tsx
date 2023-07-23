"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {

const storeModal = useStoreModal();

  return(<Modal
    title="create store"
    description="add new store"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
  >
    store form
  </Modal>);
};

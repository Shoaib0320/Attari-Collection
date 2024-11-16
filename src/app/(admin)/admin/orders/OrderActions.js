// import { Button } from "@/components/ui/button";
// import DetailSheet from "./DetailSheet";

// function OrderActions({ order }) {
//   return (
//     <div className="flex items-center gap-2">
//       <DetailSheet order={order} />
//       <Button variant="outline" onClick={() => console.log("Delete order", order._id)}>
//         Delete
//       </Button>
//       <Button variant="outline" onClick={() => console.log("Mark as delivered", order._id)}>
//         Mark as Delivered
//       </Button>
//     </div>
//   );
// }

// export default OrderActions;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "./Modal"; // Assuming you have a modal component
import { updateOrders } from "@/actions/ordersActions";
import DetailSheet from "./DetailSheet";

function OrderActions({ order }) {
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleConfirm = async () => {
    try {
      await updateOrders(order._id, actionType);
      alert(`Order marked as ${actionType}`);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <DetailSheet order={order} />
      <Button
        variant="outline"
        onClick={() => {
          setActionType("cancelled");
          setShowModal(true);
        }}
      >
        Cancel
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setActionType("delivered");
          setShowModal(true);
        }}
      >
        Mark as Delivered
      </Button>

      {showModal && (
        <Modal
          title={`Confirm ${actionType}`}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
        >
          Are you sure you want to mark this order as {actionType}?
        </Modal>
      )}
    </div>
  );
}

export default OrderActions;

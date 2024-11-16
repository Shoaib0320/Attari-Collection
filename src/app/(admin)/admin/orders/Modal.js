import { Button } from "@/components/ui/button";

export function Modal({ title, onClose, onConfirm, children }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 w-1/3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p>{children}</p>
          <div className="flex justify-end gap-2 mt-4">
            <Button className='bg-gray-300 text-black hover:bg-gray-700 hover:text-white' variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className='bg-gray-700 text-white hover:bg-gray-300 hover:text-black' variant="primary" onClick={onConfirm}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
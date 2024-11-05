"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import SignIn from './Sign-in';
import { Button } from '../ui/button';

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {/* Button to open the dialog */}
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      {/* Dialog Component */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in</DialogTitle>
          </DialogHeader>
          <DialogFooter>

            <SignIn />            

          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

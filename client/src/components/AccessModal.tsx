import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (email: string, name?: string) => void;
}

export default function AccessModal({ open, onOpenChange, onSubmit }: AccessModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      onSubmit(email, name || undefined);
      setEmail("");
      setName("");
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-0 bg-card/95 backdrop-blur max-w-sm mx-4 sm:mx-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-bold text-foreground">
            REQUEST ACCESS
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="label-uppercase text-xs text-muted-foreground">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-border bg-background text-foreground placeholder:text-muted-foreground text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="label-uppercase text-xs text-muted-foreground">
              Name <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground text-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={!email || isSubmitting}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 active:scale-95 transition-transform duration-150 text-sm"
          >
            {isSubmitting ? "SUBMITTING..." : "REQUEST ACCESS"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          Access is granted immediately. Session saved. No login required.
        </p>
      </DialogContent>
    </Dialog>
  );
}

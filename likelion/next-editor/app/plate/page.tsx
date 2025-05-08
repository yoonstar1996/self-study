import { PlateEditor } from "@/components/plate/editor/plate-editor";
import { SettingsProvider } from "@/components/plate/editor/settings";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <div className="h-screen w-full" data-registry="plate">
      <SettingsProvider>
        <PlateEditor />
      </SettingsProvider>

      <Toaster />
    </div>
  );
}

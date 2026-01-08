import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

import { CustomCursor } from "@/components/ui/custom-cursor";
import { ThemeSettings } from "@/components/ui/theme-settings";
import { TerminalView } from "@/components/ui/terminal-view";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CustomCursor />
        <ThemeSettings />
        <TerminalView />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Success from "@/pages/success";

import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Compliance from "@/pages/compliance";
import CaseStudies from "@/pages/case-studies";
import TechStack from "@/pages/tech-stack";

import { PageTransition } from "@/components/layout/page-transition";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/compliance" component={Compliance} />
        <Route path="/work" component={CaseStudies} />
        <Route path="/tech" component={TechStack} />
        <Route path="/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

import { CustomCursor } from "@/components/ui/custom-cursor";
import { ThemeSettings } from "@/components/ui/theme-settings";
import { TerminalView } from "@/components/ui/terminal-view";

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll>
          <ScrollToTop />
          <Toaster />
          <CustomCursor />
          <ThemeSettings />
          <TerminalView />
          <Router />
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Expenses from "./pages/Expenses";
import TariffCalculator from "./pages/createTarif";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} >
          <Route index element={<Home/>}/>
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/expenses" element={<Expenses/>} />
          <Route path="/tarifFind" element={<TariffCalculator/>}/>
          <Route path="*" element={<NotFound />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

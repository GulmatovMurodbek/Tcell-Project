import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { 
  TrendingUp, 
  Bell
} from "lucide-react";
import AiUsageModal from "@/components/aiDialog";


const Expenses = () => {

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  let [isOpen,setIsOpen]=useState(false)
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-tcell-pink/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Финансовый контроль</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Контроль <span className="text-gradient">расходов</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Следите за своими тратами на связь в одном месте
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      

      {/* Categories */}
      {/* <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Категории расходов</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, index) => (
              <Card 
                key={index} 
                className="p-5 bg-card border-border/50 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{cat.name}</p>
                <p className="text-xl font-bold text-foreground">{cat.amount} сом</p>
                <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-500`}
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{cat.percent}% от общего</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Expense History */}
      {/* <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-foreground">История расходов</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Фильтры
              </Button>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value as FilterCategory)}
                className="px-4 py-2 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Все категории</option>
                <option value="internet">Интернет</option>
                <option value="calls">Звонки</option>
                <option value="sms">SMS</option>
                <option value="services">Услуги</option>
                <option value="subscriptions">Подписки</option>
              </select>
            </div>
          </div>

          <Card className="bg-card border-border/50 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Дата</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Тип</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Описание</th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">Сумма</th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Баланс</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseHistory.map((item, index) => (
                    <tr key={index} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-sm text-foreground">{item.date}</td>
                      <td className="p-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === "Пополнение" 
                            ? "bg-green-500/10 text-green-500"
                            : "bg-primary/10 text-primary"
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">{item.description}</td>
                      <td className={`p-4 text-sm font-medium text-right ${
                        item.amount > 0 ? "text-green-500" : "text-foreground"
                      }`}>
                        {item.amount > 0 ? "+" : ""}{item.amount} сом
                      </td>
                      <td className="p-4 text-sm text-muted-foreground text-right hidden md:table-cell">{item.balance} сом</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-border/50 text-center">
              <Button variant="ghost" className="text-primary">
                Показать больше
              </Button>
            </div>
          </Card>
        </div>
      </section> */}

      {/* Notifications */}
      <AiUsageModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Контролируйте свои расходы и экономьте больше
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Подключите тарифи и получайте рекомендации по экономии
              </p>
              <Button onClick={()=>setIsOpen(true)} size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                Настроить расходов
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-tcell-pink/5 border-border/50 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Уведомления о расходах</h3>
                  <p className="text-muted-foreground text-sm">
                    Получайте уведомления о больших расходах или необычной активности
                  </p>
                </div>
              </div>
              <Switch 
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Expenses;

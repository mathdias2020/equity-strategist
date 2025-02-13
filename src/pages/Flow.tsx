
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { flowData } from "@/mocks/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Flow() {
  return (
    <Layout>
      <div className="grid gap-6">
        <Card className="bg-trader-navy border-trader-gray">
          <CardHeader>
            <CardTitle>Fluxo de Ordens</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={flowData}>
                <XAxis dataKey="time" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip 
                  contentStyle={{ background: "#1A1F2C", border: "1px solid #2D3748" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="buyers" name="Compradores" fill="#00FF88" />
                <Bar dataKey="sells" name="Vendedores" fill="#FF4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle>Pressão Compradora</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-trader-green">65%</div>
              <p className="text-xs text-muted-foreground">+5% em relação a média</p>
            </CardContent>
          </Card>

          <Card className="bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle>Pressão Vendedora</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-trader-red">35%</div>
              <p className="text-xs text-muted-foreground">-5% em relação a média</p>
            </CardContent>
          </Card>

          <Card className="bg-trader-navy border-trader-gray">
            <CardHeader>
              <CardTitle>Volume Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-trader-yellow">R$ 2.5B</div>
              <p className="text-xs text-muted-foreground">+12% acima da média</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

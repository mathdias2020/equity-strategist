
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartType, PositionFilter } from '@/types/flow';

interface FlowChartProps {
  chartType: ChartType;
  positionFilter: PositionFilter;
  chartData: any[];
}

export const FlowChart = ({ chartType, positionFilter, chartData }: FlowChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      {chartType === 'line' ? (
        <LineChart data={chartData}>
          <XAxis dataKey="time" stroke="#888888" />
          <YAxis stroke="#888888" />
          <Tooltip 
            contentStyle={{ background: "#1A1F2C", border: "1px solid #2D3748" }}
            labelStyle={{ color: "#fff" }}
          />
          {(positionFilter === 'institutional' || positionFilter === 'both') && (
            <Line 
              type="monotone" 
              dataKey="institutional" 
              name="Institucional" 
              stroke="#00FF88" 
              strokeWidth={2} 
            />
          )}
          {(positionFilter === 'retail' || positionFilter === 'both') && (
            <Line 
              type="monotone" 
              dataKey="retail" 
              name="Varejo" 
              stroke="#FF4444" 
              strokeWidth={2} 
            />
          )}
        </LineChart>
      ) : (
        <BarChart data={chartData}>
          <XAxis dataKey="time" stroke="#888888" />
          <YAxis stroke="#888888" />
          <Tooltip 
            contentStyle={{ background: "#1A1F2C", border: "1px solid #2D3748" }}
            labelStyle={{ color: "#fff" }}
          />
          {(positionFilter === 'institutional' || positionFilter === 'both') && (
            <Bar 
              dataKey="institutional" 
              name="Institucional" 
              fill="#00FF88" 
            />
          )}
          {(positionFilter === 'retail' || positionFilter === 'both') && (
            <Bar 
              dataKey="retail" 
              name="Varejo" 
              fill="#FF4444" 
            />
          )}
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

import { Typography } from '@/components/shared/typography/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Package } from 'lucide-react';

interface DPPCardProps {
  metric: string;
  description: string;
  date: string;
}

const DPPCard = ({metric, description, date}: DPPCardProps) => {
  return (
    <Card className="w-full pt-0 pb-0">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <Typography variant="h2">{metric}</Typography>
            <Typography variant="p" className="text-sm text-gray-500 mt-2">
              {description}
            </Typography>

            <div className="flex items-center mt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
          </div>
          <div className="bg-purple-100 p-2 rounded-md">
            <Package className="h-5 w-5 text-purple-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DPPCard;

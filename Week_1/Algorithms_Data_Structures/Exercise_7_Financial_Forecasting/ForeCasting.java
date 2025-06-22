package Week_1.Algorithms_Data_Structures.Exercise_7_Financial_Forecasting;

public class ForeCasting{
    public static double forecast(int years, double currentvalue, double growthrate){
        if(years == 0){
            return currentvalue;
        }
        return (1+growthrate)*forecast(years-1,currentvalue,growthrate);
    }

    public static void main(String[] args) {
        int yrs = 5;
        double cv = 10000;
        double gr = 0.08;
        double fv = forecast(yrs,cv,gr);
        System.out.print(String.format("%.2f", fv));
    }
}
cd src
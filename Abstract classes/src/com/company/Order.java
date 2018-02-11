
import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import java.util.ArrayList;
import java.util.List;

public class Order{

    private List<OrderLine> orderlines;
    public String customerName;

    public Order(String CustomerName)
    {
        orderlines = new ArrayList<>();
        this.customerName = CustomerName;
    }

    public void addOrderLine(OrderLine orderline)
    {

        orderlines.add(orderline);
    }

    public List<OrderLine> getAllOrderLines()
    {

        return orderlines;
    }

    @Override
    public String toString() {

        String result = customerName;

        for (OrderLine line : orderlines) {

            result = result + "\r\n  " + line.toString();
        }

        return result;
    }


    public Money getOrderTotal() {

        Money sum = Money.of(CurrencyUnit.EUR, 0);
        for (OrderLine line : orderlines) {
            sum = sum.plus(line.GetOrderLineTotalValue());
        }

        return sum;
    }

}

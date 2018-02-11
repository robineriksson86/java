
import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Order order = new Order("Edument AB");

        order.addOrderLine(new OrderLine("Widget A", 10, Money.of(CurrencyUnit.EUR, 3.14)));
        order.addOrderLine(new OrderLine("Widget B", 10, Money.of(CurrencyUnit.EUR, 9.95)));

        System.out.println(order);

        System.out.println("Total: " + order.getOrderTotal());

    }

}





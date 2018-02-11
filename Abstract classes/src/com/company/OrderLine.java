
import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

/**
 * Created by Tore on 2016-08-25.
 */
public class OrderLine {

    public String productName;
    public int quantity;
    public Money price;

    public OrderLine(String ProductName, int Quantity, Money price)
    {
        productName = ProductName;
        quantity = Quantity;
        this.price = price;
    }

    @Override
    public String toString() {
        return productName + ", " + quantity + " items, price per item " + price.toString();
    }

    public Money GetOrderLineTotalValue() {
        return price.multipliedBy(quantity);
    }
}

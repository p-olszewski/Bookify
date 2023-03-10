package pl.inf.app.bm.room.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.room.entity.UiRoom;
import pl.inf.app.bm.room.entity.RoomBE;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

/**
 * Fills the database room model according to the UI room model
 */
@Component
public class UiRoomToEntityMapper implements Mapper<Filler<UiRoom, RoomBE>, RoomBE> {
    @Override
    public RoomBE map(final Filler<UiRoom, RoomBE> filler) {
        if (filler == null) return null;

        final RoomBE target = filler.getTarget();
        final UiRoom source = filler.getSource();

        target.setImages(source.getImages());
        target.setRoomType(source.getRoomType());
        target.setPrice(source.getPrice());
        target.setCapacity(source.getCapacity());
        target.setSingleBeds(source.getSingleBeds());
        target.setDoubleBeds(source.getDoubleBeds());
        target.setDescription(source.getDescription());
        target.setArea(source.getArea());
        target.setRoomNumber(source.getRoomNumber());
        target.setAddOns(source.getAddOns());
        target.setAccessories(source.getAccessories());
        target.setActive(source.isActive());

        return target;
    }
}

import { Link } from "./link";
import * as _ from 'lodash';
/**
 *  A Resource Object represents a resource.
 *  It has two reserved properties:
 *  (1)  "_links": contains links to other resources.
 *  (2)  "_embedded": contains embedded resources.
 */
export class Resource {
    constructor(dto) {
        const links = !(dto?._links) ? {} : Object.fromEntries(Object.entries(dto._links).map(([rel, links]) => [rel, Link.fromDtos(links)]));
        if (!links['self'])
            throw new Error(`The self link is missing in the given ResourceDto: ${JSON.stringify(dto)}`);
        const embedded = !(dto?._embedded) ? {} : Object.fromEntries(Object.entries(dto._embedded).map(([rel, resources]) => [rel, Resource.fromDtos(resources)]));
        const dtoWithParsedDates = Resource.parseDates(dto);
        Object.assign(this, dtoWithParsedDates);
        // We ensured that it has a self property
        this._links = links;
        this._embedded = embedded;
    }
    findLinks(rel) {
        const linksWithRel = this._links[rel];
        if (!linksWithRel)
            return [];
        return linksWithRel;
    }
    findLink(rel, name) {
        const linksWithRel = this.findLinks(rel);
        if (linksWithRel.length === 0)
            return undefined;
        if (name)
            return linksWithRel.find(link => link.name === name);
        return linksWithRel[0];
    }
    findEmbedded(rel) {
        const embeddedWithRel = this._embedded[rel];
        if (!embeddedWithRel)
            return [];
        return embeddedWithRel;
    }
    getFormLinkHrefs() {
        const allLinks = this._links;
        if (!allLinks)
            return [];
        return Object.keys(allLinks)
            .filter(key => Resource.isUrl(key));
    }
    static isUrl(possibleUrl) {
        try {
            new URL(possibleUrl);
            return true;
        }
        catch {
            return false;
        }
    }
    //public static fromDto(dto: ResourceDto): Resource;
    //public static fromDto<TResource extends Resource>(dto: ResourceDto, TResource: { new(dto: ResourceDto): TResource }): TResource;
    static fromDto(dto, TResource) {
        const links = !(dto?._links) ? {} : Object.fromEntries(Object.entries(dto._links).map(([rel, links]) => [rel, Link.fromDtos(links)]));
        const embedded = !(dto?._embedded) ? {} : Object.fromEntries(Object.entries(dto._embedded).map(([rel, embeddedResourceDtos]) => [rel, Resource.fromDtos(embeddedResourceDtos, TResource)]));
        const dtoWithParsedDates = Resource.parseDates(dto);
        const resource = Object.assign(TResource ? new TResource(dto) : new Resource(dto), dtoWithParsedDates, { _embedded: embedded, _links: links });
        return resource;
    }
    static fromDtos(dtos, TResource) {
        if (!dtos)
            return [];
        const resources = dtos
            .filter(dto => !!dto)
            .map(dto => Resource.fromDto(dto, TResource));
        return resources;
    }
    static parseDates(dto) {
        if (dto === null || dto === undefined)
            return dto;
        if (_.isString(dto)) {
            if (this._iso8601RegEx.test(dto))
                return new Date(dto);
        }
        else if (_.isArray(dto)) {
            for (let i = 0; i < dto.length; i++) {
                dto[i] = this.parseDates(dto[i]);
            }
        }
        else if (_.isPlainObject(dto)) {
            for (const [key, value] of Object.entries(dto)) {
                dto[key] = this.parseDates(value);
            }
        }
        return dto;
    }
}
Resource._iso8601RegEx = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaGFsLWNsaWVudC9zcmMvbGliL01vZGVscy9yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFXLE1BQU0sUUFBUSxDQUFDO0FBQ3ZDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBOEI1Qjs7Ozs7R0FLRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBc0JuQixZQUFtQixHQUFpQjtRQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0YsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMs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LENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7YUFFSSxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBa0MsQ0FBQyxFQUFFO2dCQUM1RSxHQUFtQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEU7U0FDRjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUF0SWMsc0JBQWEsR0FBRyx3UkFBd1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmssIExpbmtEdG8gfSBmcm9tIFwiLi9saW5rXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbi8qKiBcclxuICogIEEgUmVzb3VyY2UgT2JqZWN0IHJlcHJlc2VudHMgYSByZXNvdXJjZS4gICBcclxuICogIEl0IGhhcyB0d28gcmVzZXJ2ZWQgcHJvcGVydGllczpcclxuICogICgxKSAgXCJfbGlua3NcIjogY29udGFpbnMgbGlua3MgdG8gb3RoZXIgcmVzb3VyY2VzLlxyXG4gKiAgKDIpICBcIl9lbWJlZGRlZFwiOiBjb250YWlucyBlbWJlZGRlZCByZXNvdXJjZXMuIFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZUR0byB7XHJcbiAgLyoqIFxyXG4gICAqICBUaGUgcmVzZXJ2ZWQgXCJfZW1iZWRkZWRcIiBwcm9wZXJ0eSBpcyBPUFRJT05BTCAgIFxyXG4gICAqICBJdCBpcyBhbiBvYmplY3Qgd2hvc2UgcHJvcGVydHkgbmFtZXMgYXJlIGxpbmsgcmVsYXRpb24gdHlwZXMgKGFzICAgXHJcbiAgICogIGRlZmluZWQgYnkgW1JGQzU5ODhdKSBhbmQgdmFsdWVzIGFyZSBlaXRoZXIgYSBSZXNvdXJjZSBPYmplY3Qgb3IgYW4gICBcclxuICAgKiAgYXJyYXkgb2YgUmVzb3VyY2UgT2JqZWN0cy4gICBFbWJlZGRlZCBSZXNvdXJjZXMgTUFZIGJlIGEgZnVsbCwgcGFydGlhbCwgXHJcbiAgICogIG9yIGluY29uc2lzdGVudCB2ZXJzaW9uIG9mICAgdGhlIHJlcHJlc2VudGF0aW9uIHNlcnZlZCBmcm9tIHRoZSB0YXJnZXQgVVJJLiBcclxuICAgKi9cclxuICBfZW1iZWRkZWQ/OiB7IFtuYW1lOiBzdHJpbmddOiBSZXNvdXJjZUR0b1tdIH07XHJcbiAgLyoqIFxyXG4gICAqICBUaGUgcmVzZXJ2ZWQgXCJfbGlua3NcIiBwcm9wZXJ0eSBpcyBPUFRJT05BTC4gICBcclxuICAgKiAgSXQgaXMgYW4gb2JqZWN0IHdob3NlIHByb3BlcnR5IG5hbWVzIGFyZSBsaW5rIHJlbGF0aW9uIHR5cGVzIChhcyAgIFxyXG4gICAqICBkZWZpbmVkIGJ5IFtSRkM1OTg4XSkgYW5kIHZhbHVlcyBhcmUgZWl0aGVyIGEgTGluayBPYmplY3Qgb3IgYW4gYXJyYXkgICBcclxuICAgKiAgb2YgTGluayBPYmplY3RzLiAgVGhlIHN1YmplY3QgcmVzb3VyY2Ugb2YgdGhlc2UgbGlua3MgaXMgdGhlIFJlc291cmNlICAgXHJcbiAgICogIE9iamVjdCBvZiB3aGljaCB0aGUgY29udGFpbmluZyBcIl9saW5rc1wiIG9iamVjdCBpcyBhIHByb3BlcnR5LiBcclxuICAgKi9cclxuICBfbGlua3M/OiB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogTGlua0R0b1tdIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgIHNlbGY6IExpbmtEdG9bXTtcclxuICB9O1xyXG59XHJcblxyXG4vKiogXHJcbiAqICBBIFJlc291cmNlIE9iamVjdCByZXByZXNlbnRzIGEgcmVzb3VyY2UuICAgXHJcbiAqICBJdCBoYXMgdHdvIHJlc2VydmVkIHByb3BlcnRpZXM6XHJcbiAqICAoMSkgIFwiX2xpbmtzXCI6IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIHJlc291cmNlcy5cclxuICogICgyKSAgXCJfZW1iZWRkZWRcIjogY29udGFpbnMgZW1iZWRkZWQgcmVzb3VyY2VzLiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2lzbzg2MDFSZWdFeCA9IC9eKFsrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0Oj8wMCkoWy4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFsuLF1cXGQrKT8pPyhbelpdfChbKy1dKShbMDFdXFxkfDJbMC0zXSk6PyhbMC01XVxcZCk/KT8pPyk/JC87XHJcbiAgLyoqIFxyXG4gICAqICBUaGUgcmVzZXJ2ZWQgXCJfZW1iZWRkZWRcIiBwcm9wZXJ0eSBpcyBPUFRJT05BTCAgIFxyXG4gICAqICBJdCBpcyBhbiBvYmplY3Qgd2hvc2UgcHJvcGVydHkgbmFtZXMgYXJlIGxpbmsgcmVsYXRpb24gdHlwZXMgKGFzICAgXHJcbiAgICogIGRlZmluZWQgYnkgW1JGQzU5ODhdKSBhbmQgdmFsdWVzIGFyZSBlaXRoZXIgYSBSZXNvdXJjZSBPYmplY3Qgb3IgYW4gICBcclxuICAgKiAgYXJyYXkgb2YgUmVzb3VyY2UgT2JqZWN0cy4gICBFbWJlZGRlZCBSZXNvdXJjZXMgTUFZIGJlIGEgZnVsbCwgcGFydGlhbCwgXHJcbiAgICogIG9yIGluY29uc2lzdGVudCB2ZXJzaW9uIG9mICAgdGhlIHJlcHJlc2VudGF0aW9uIHNlcnZlZCBmcm9tIHRoZSB0YXJnZXQgVVJJLiBcclxuICAgKi9cclxuICBwdWJsaWMgX2VtYmVkZGVkOiB7IFtuYW1lOiBzdHJpbmddOiBSZXNvdXJjZVtdIH07XHJcbiAgLyoqIFxyXG4gICAqICBUaGUgcmVzZXJ2ZWQgXCJfbGlua3NcIiBwcm9wZXJ0eSBpcyBPUFRJT05BTC4gICBcclxuICAgKiAgSXQgaXMgYW4gb2JqZWN0IHdob3NlIHByb3BlcnR5IG5hbWVzIGFyZSBsaW5rIHJlbGF0aW9uIHR5cGVzIChhcyAgIFxyXG4gICAqICBkZWZpbmVkIGJ5IFtSRkM1OTg4XSkgYW5kIHZhbHVlcyBhcmUgZWl0aGVyIGEgTGluayBPYmplY3Qgb3IgYW4gYXJyYXkgICBcclxuICAgKiAgb2YgTGluayBPYmplY3RzLiAgVGhlIHN1YmplY3QgcmVzb3VyY2Ugb2YgdGhlc2UgbGlua3MgaXMgdGhlIFJlc291cmNlICAgXHJcbiAgICogIE9iamVjdCBvZiB3aGljaCB0aGUgY29udGFpbmluZyBcIl9saW5rc1wiIG9iamVjdCBpcyBhIHByb3BlcnR5LiBcclxuICAgKi9cclxuICBwdWJsaWMgX2xpbmtzOiB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogTGlua1tdIHwgdW5kZWZpbmVkO1xyXG4gICAgc2VsZjogTGlua1tdO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkdG8/OiBSZXNvdXJjZUR0bykge1xyXG4gICAgY29uc3QgbGlua3MgPSAhKGR0bz8uX2xpbmtzKSA/IHt9IDogT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGR0by5fbGlua3MpLm1hcCgoW3JlbCwgbGlua3NdKSA9PiBbcmVsLCBMaW5rLmZyb21EdG9zKGxpbmtzKV0pKTtcclxuICAgIGlmICghbGlua3NbJ3NlbGYnXSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgc2VsZiBsaW5rIGlzIG1pc3NpbmcgaW4gdGhlIGdpdmVuIFJlc291cmNlRHRvOiAke0pTT04uc3RyaW5naWZ5KGR0byl9YCk7XHJcblxyXG4gICAgY29uc3QgZW1iZWRkZWQgPSAhKGR0bz8uX2VtYmVkZGVkKSA/IHt9IDogT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGR0by5fZW1iZWRkZWQpLm1hcCgoW3JlbCwgcmVzb3VyY2VzXSkgPT4gW3JlbCwgUmVzb3VyY2UuZnJvbUR0b3MocmVzb3VyY2VzKV0pKTtcclxuICAgIGNvbnN0IGR0b1dpdGhQYXJzZWREYXRlcyA9IFJlc291cmNlLnBhcnNlRGF0ZXMoZHRvKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGR0b1dpdGhQYXJzZWREYXRlcyk7XHJcblxyXG4gICAgLy8gV2UgZW5zdXJlZCB0aGF0IGl0IGhhcyBhIHNlbGYgcHJvcGVydHlcclxuICAgIHRoaXMuX2xpbmtzID0gbGlua3MgYXMge1xyXG4gICAgICBbbmFtZTogc3RyaW5nXTogTGlua1tdIHwgdW5kZWZpbmVkO1xyXG4gICAgICBzZWxmOiBMaW5rW107XHJcbiAgICB9O1xyXG4gICAgdGhpcy5fZW1iZWRkZWQgPSBlbWJlZGRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kTGlua3MocmVsOiBzdHJpbmcpOiBMaW5rW10ge1xyXG4gICAgY29uc3QgbGlua3NXaXRoUmVsID0gdGhpcy5fbGlua3NbcmVsXTtcclxuXHJcbiAgICBpZiAoIWxpbmtzV2l0aFJlbClcclxuICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgIHJldHVybiBsaW5rc1dpdGhSZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZExpbmsocmVsOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiBMaW5rIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IGxpbmtzV2l0aFJlbCA9IHRoaXMuZmluZExpbmtzKHJlbCk7XHJcblxyXG4gICAgaWYgKGxpbmtzV2l0aFJlbC5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKG5hbWUpXHJcbiAgICAgIHJldHVybiBsaW5rc1dpdGhSZWwuZmluZChsaW5rID0+IGxpbmsubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmtzV2l0aFJlbFswXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kRW1iZWRkZWQocmVsOiBzdHJpbmcpOiBSZXNvdXJjZVtdIHtcclxuICAgIGNvbnN0IGVtYmVkZGVkV2l0aFJlbCA9IHRoaXMuX2VtYmVkZGVkW3JlbF07XHJcblxyXG4gICAgaWYgKCFlbWJlZGRlZFdpdGhSZWwpXHJcbiAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICByZXR1cm4gZW1iZWRkZWRXaXRoUmVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZvcm1MaW5rSHJlZnMoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgYWxsTGlua3MgPSB0aGlzLl9saW5rcztcclxuXHJcbiAgICBpZiAoIWFsbExpbmtzKVxyXG4gICAgICByZXR1cm4gW107XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFsbExpbmtzKVxyXG4gICAgICAuZmlsdGVyKGtleSA9PiBSZXNvdXJjZS5pc1VybChrZXkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGlzVXJsKHBvc3NpYmxlVXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5ldyBVUkwocG9zc2libGVVcmwpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9wdWJsaWMgc3RhdGljIGZyb21EdG8oZHRvOiBSZXNvdXJjZUR0byk6IFJlc291cmNlO1xyXG4gIC8vcHVibGljIHN0YXRpYyBmcm9tRHRvPFRSZXNvdXJjZSBleHRlbmRzIFJlc291cmNlPihkdG86IFJlc291cmNlRHRvLCBUUmVzb3VyY2U6IHsgbmV3KGR0bzogUmVzb3VyY2VEdG8pOiBUUmVzb3VyY2UgfSk6IFRSZXNvdXJjZTtcclxuICBwcml2YXRlIHN0YXRpYyBmcm9tRHRvPFRSZXNvdXJjZSBleHRlbmRzIFJlc291cmNlPihkdG86IFJlc291cmNlRHRvLCBUUmVzb3VyY2U/OiB7IG5ldyhkdG86IFJlc291cmNlRHRvKTogVFJlc291cmNlIH0pOiBUUmVzb3VyY2UgfCBSZXNvdXJjZSB7XHJcbiAgICBjb25zdCBsaW5rcyA9ICEoZHRvPy5fbGlua3MpID8ge30gOiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoZHRvLl9saW5rcykubWFwKChbcmVsLCBsaW5rc10pID0+IFtyZWwsIExpbmsuZnJvbUR0b3MobGlua3MpXSkpO1xyXG4gICAgY29uc3QgZW1iZWRkZWQgPSAhKGR0bz8uX2VtYmVkZGVkKSA/IHt9IDogT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGR0by5fZW1iZWRkZWQpLm1hcCgoW3JlbCwgZW1iZWRkZWRSZXNvdXJjZUR0b3NdKSA9PiBbcmVsLCBSZXNvdXJjZS5mcm9tRHRvcyhlbWJlZGRlZFJlc291cmNlRHRvcywgVFJlc291cmNlKV0pKTtcclxuICAgIGNvbnN0IGR0b1dpdGhQYXJzZWREYXRlcyA9IFJlc291cmNlLnBhcnNlRGF0ZXMoZHRvKTtcclxuXHJcbiAgICBjb25zdCByZXNvdXJjZSA9IE9iamVjdC5hc3NpZ24oVFJlc291cmNlID8gbmV3IFRSZXNvdXJjZShkdG8pIDogbmV3IFJlc291cmNlKGR0byksIGR0b1dpdGhQYXJzZWREYXRlcywgeyBfZW1iZWRkZWQ6IGVtYmVkZGVkLCBfbGlua3M6IGxpbmtzIH0pO1xyXG5cclxuICAgIHJldHVybiByZXNvdXJjZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGZyb21EdG9zPFRSZXNvdXJjZSBleHRlbmRzIFJlc291cmNlPihkdG9zOiBSZXNvdXJjZUR0b1tdIHwgbnVsbCB8IHVuZGVmaW5lZCwgVFJlc291cmNlPzogeyBuZXcoZHRvOiBSZXNvdXJjZUR0byk6IFRSZXNvdXJjZSB9KTogKFRSZXNvdXJjZSB8IFJlc291cmNlKVtdIHtcclxuICAgIGlmICghZHRvcylcclxuICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IHJlc291cmNlcyA9IGR0b3NcclxuICAgICAgLmZpbHRlcihkdG8gPT4gISFkdG8pXHJcbiAgICAgIC5tYXAoZHRvID0+IFJlc291cmNlLmZyb21EdG8oZHRvLCBUUmVzb3VyY2UpKTtcclxuXHJcbiAgICByZXR1cm4gcmVzb3VyY2VzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VEYXRlcyhkdG86IHVua25vd24pOiB1bmtub3duIHtcclxuICAgIGlmIChkdG8gPT09IG51bGwgfHwgZHRvID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybiBkdG87XHJcblxyXG4gICAgaWYgKF8uaXNTdHJpbmcoZHRvKSkge1xyXG4gICAgICBpZiAodGhpcy5faXNvODYwMVJlZ0V4LnRlc3QoZHRvKSlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChfLmlzQXJyYXkoZHRvKSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGR0by5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGR0b1tpXSA9IHRoaXMucGFyc2VEYXRlcyhkdG9baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoXy5pc1BsYWluT2JqZWN0KGR0bykpIHtcclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZHRvIGFzIHsgW25hbWU6IHN0cmluZ106IHVua25vd24gfSkpIHtcclxuICAgICAgICAoZHRvIGFzIHsgW25hbWU6IHN0cmluZ106IHVua25vd24gfSlba2V5XSA9IHRoaXMucGFyc2VEYXRlcyh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHRvO1xyXG4gIH1cclxufVxyXG4iXX0=
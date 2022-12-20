import { deburr } from '../deburr';

describe('deburr', () => {
  it('should deburr correctly - 1', () => {
    const res = deburr('Rīga № Straße');
    expect(res).toEqual('Riga ? Straße');
  });
  it('should deburr correctly - 2', () => {
    const res = deburr('Łopuszańska 12A');
    expect(res).toEqual('Lopuszanska 12A');
  });
  it('should deburr correctly - 3', () => {
    const res = deburr('Rīgas iela 1 Jūrmala');
    expect(res).toEqual('Rigas iela 1 Jurmala');
  });
  it('should deburr correctly - 4', () => {
    const res = deburr('Østre Aker vei 18');
    expect(res).toEqual('Østre Aker vei 18');
  });
  it('should deburr correctly - 5', () => {
    const res = deburr('Ungererstraße 175 München');
    expect(res).toEqual('Ungererstraße 175 München');
  });
  it('should deburr correctly - 6', () => {
    const res = deburr('Calle de Alonso Núñez 1');
    expect(res).toEqual('Calle de Alonso Núñez 1');
  });

  it('should deburr all', () => {
    const res = deburr(
      'ĀāĂăĄąĆćĈĉČčĎďĐđĒēĖėĘęĚěĜĝĞğĢģĤĥĪīĮįıĴĵĶķĹĺĻļĽľŁłŃńŅņŇňŐőŔŕŘřŚśŜŝŞşŠšȘșŢţŤťŨũŪūŮůŰűŲųŴŵŶŷŸŹźŻżŽž ŒœÆæÞðþÆ'
    );
    expect(res).toEqual(
      'AaAaAaCcCcCcDdDdEeEeEeEeGgGgGgHhIiIiiJjKkLlLlLlLlNnNnNnOoRrRrSsSsSsSsSsTtTtUuUuUuUuUuWwYyYZzZzZz OeoeAeaeThdthAe'
    );
  });
  it('should not deburr any of the accepted letters', () => {
    const inputString =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåçèéêëìíîïñòóôõöøùúûüýÿ';
    const res = deburr(inputString);
    expect(res).toEqual(inputString);
  });
});

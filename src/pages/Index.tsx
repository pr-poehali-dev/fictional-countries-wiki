import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('main');
  const [selectedCountry, setSelectedCountry] = useState('sashiania');

  const navigationSections = [
    { id: 'main', title: 'Главная', icon: 'Home' },
    { id: 'countries', title: 'Страны', icon: 'Globe' }
  ];

  const featuredCountries = [
    {
      id: 'sashiania',
      name: 'Сашианийская Республика',
      capital: 'Асхиния',
      population: '23.8 млн',
      area: '92,400 км²',
      government: 'Президентская республика',
      description: 'Развитое государство на северо-западе материка Альвания, известное высокими технологиями и динамичной экономикой.'
    },
    {
      id: 'kusaria',
      name: 'Кусарийская Демократическая Республика',
      capital: 'Кусарград',
      population: '18.2 млн',
      area: '78,600 км²',
      government: 'Социалистическая республика',
      description: 'Авторитарное государство на востоке материка Альвания с мощным ВПК и плановой экономикой.'
    }
  ];

  const economicData = [
    { sector: 'IT и электроника', percentage: '35%', value: '420 млрд сашинов' },
    { sector: 'Сельское хозяйство', percentage: '18%', value: '216 млрд сашинов' },
    { sector: 'Машиностроение', percentage: '22%', value: '264 млрд сашинов' },
    { sector: 'Энергетика', percentage: '15%', value: '180 млрд сашинов' },
    { sector: 'Услуги', percentage: '10%', value: '120 млрд сашинов' }
  ];

  const budgetData = [
    { category: 'Здравоохранение', amount: '72 млрд', percentage: '20.0%' },
    { category: 'Образование', amount: '65 млрд', percentage: '18.0%' },
    { category: 'Оборона', amount: '55 млрд', percentage: '15.3%' },
    { category: 'Наука и технологии', amount: '54 млрд', percentage: '15.0%' },
    { category: 'Инфраструктура', amount: '40 млрд', percentage: '11.1%' }
  ];

  const regions = [
    { name: 'Столичный округ Асхиния', center: 'Асхиния', population: '5.6 млн', features: 'IT, финансы, промышленность' },
    { name: 'Столичный округ Хвиней', center: 'Хвиней', population: '4.9 млн', features: 'Порт, судостроение, ВПК' },
    { name: 'Центральная провинция', center: 'Сармонт', population: '3.9 млн', features: 'Тяжёлая промышленность' },
    { name: 'Восточная провинция', center: 'Савея', population: '3.5 млн', features: 'Технопарки, НИОКР' },
    { name: 'Западная провинция', center: 'Катрианпи', population: '2.6 млн', features: 'Автомобили, робототехника' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-serif">
      {/* Header */}
      <header className="bg-[#8B4513] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="BookOpen" size={32} className="text-[#F5F5DC]" />
              <div>
                <h1 className="text-3xl font-bold text-[#F5F5DC]" style={{fontFamily: 'Times New Roman, Times, serif'}}>Энциклопедия вымышленных стран</h1>
                <p className="text-[#F5F5DC]/80 mt-1">Полное собрание знаний о государствах мира Альвания</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Поиск по энциклопедии..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Icon name="Search" size={20} className="absolute right-3 top-2.5 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#2F4F4F] border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? 'border-[#8B4513] text-white'
                    : 'border-transparent text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                <Icon name={section.icon as any} size={20} />
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeSection === 'main' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <Card className="bg-white border-[#8B4513]/20">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-[#2F4F4F]" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                  Добро пожаловать в Энциклопедию вымышленных стран
                </CardTitle>
                <CardDescription className="text-lg text-[#2F4F4F]/80 mt-4">
                  Исследуйте богатый мир Альвании и познакомьтесь с уникальными государствами, их историей, культурой и политикой.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Featured Country */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-[#8B4513]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2F4F4F] flex items-center gap-2">
                    <Icon name="Star" size={24} className="text-[#8B4513]" />
                    Рекомендуемая статья
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#8B4513]">{featuredCountries[0].name}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><strong>Столица:</strong> {featuredCountries[0].capital}</div>
                      <div><strong>Население:</strong> {featuredCountries[0].population}</div>
                      <div><strong>Площадь:</strong> {featuredCountries[0].area}</div>
                      <div><strong>Правление:</strong> {featuredCountries[0].government}</div>
                    </div>
                    <p className="text-[#2F4F4F]/80 text-sm leading-relaxed">{featuredCountries[0].description}</p>
                    <Button 
                      className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white"
                      onClick={() => setActiveSection('countries')}
                    >
                      Читать полную статью
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#8B4513]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2F4F4F] flex items-center gap-2">
                    <Icon name="BarChart3" size={24} className="text-[#8B4513]" />
                    Экономическая структура
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {economicData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[#2F4F4F]">{item.sector}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[#8B4513] border-[#8B4513]">{item.percentage}</Badge>
                          <span className="text-xs text-[#2F4F4F]/60">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-white border-[#8B4513]/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="Globe" size={32} className="text-[#8B4513] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#2F4F4F]">2</div>
                  <div className="text-sm text-[#2F4F4F]/60">Государства</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#8B4513]/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="Users" size={32} className="text-[#8B4513] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#2F4F4F]">23.8М</div>
                  <div className="text-sm text-[#2F4F4F]/60">Население</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#8B4513]/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="MapPin" size={32} className="text-[#8B4513] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#2F4F4F]">5</div>
                  <div className="text-sm text-[#2F4F4F]/60">Провинций</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#8B4513]/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="TrendingUp" size={32} className="text-[#8B4513] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#2F4F4F]">1.2Т</div>
                  <div className="text-sm text-[#2F4F4F]/60">ВВП (сашины)</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'countries' && (
          <div className="space-y-6">
            {/* Country selector */}
            <div className="flex gap-4 mb-6">
              <Button 
                variant={selectedCountry === 'sashiania' ? 'default' : 'outline'}
                onClick={() => setSelectedCountry('sashiania')}
                className={selectedCountry === 'sashiania' ? 'bg-[#8B4513] hover:bg-[#8B4513]/90' : ''}
              >
                Сашианийская Республика
              </Button>
              <Button 
                variant={selectedCountry === 'kusaria' ? 'default' : 'outline'}
                onClick={() => setSelectedCountry('kusaria')}
                className={selectedCountry === 'kusaria' ? 'bg-[#8B4513] hover:bg-[#8B4513]/90' : ''}
              >
                Кусарийская ДР
              </Button>
            </div>

            {selectedCountry === 'sashiania' && (
            <Card className="bg-white border-[#8B4513]/20">
              <CardHeader>
                <CardTitle className="text-3xl text-[#2F4F4F]" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                  Сашианийская Республика
                </CardTitle>
                <CardDescription className="text-lg">
                  Суверенное государство на северо-западе материка Альвания
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="general">Общие сведения</TabsTrigger>
                    <TabsTrigger value="economy">Экономика</TabsTrigger>
                    <TabsTrigger value="regions">Регионы</TabsTrigger>
                    <TabsTrigger value="politics">Политика</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#8B4513]">Основная информация</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Полное название:</span>
                            <span>Сашианийская Республика</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Столица:</span>
                            <span>Асхиния</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Население:</span>
                            <span>23.8 млн</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Площадь:</span>
                            <span>92,400 км²</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Форма правления:</span>
                            <span>Президентская республика</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Президент:</span>
                            <span>Карл Маркес</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Премьер-министр:</span>
                            <span>Лилия Вест</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Валюта:</span>
                            <span>Сашин (SHN)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">ВВП:</span>
                            <span>1.2 трлн сашинов</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Независимость:</span>
                            <span>15 августа 1948 года</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#8B4513]">География и климат</h3>
                        <div className="text-sm space-y-2">
                          <p><strong>Расположение:</strong> Северо-запад материка Альвания</p>
                          <p><strong>Границы:</strong></p>
                          <ul className="ml-4 space-y-1">
                            <li>• Север — Сашианийский океан</li>
                            <li>• Восток — Кусарийская ДР</li>
                            <li>• Юг — Государство Кальвария</li>
                            <li>• Запад — Королевство Вестмарк</li>
                          </ul>
                          <p><strong>Рельеф:</strong></p>
                          <ul className="ml-4 space-y-1">
                            <li>• Север — холмистые плато и леса</li>
                            <li>• Центр — равнины</li>
                            <li>• Юг — долины и степи</li>
                          </ul>
                          <p><strong>Водные объекты:</strong> Река Асхиния, озеро Велара</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="economy" className="mt-6">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-[#8B4513]">Макроэкономические показатели</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>ВВП:</span>
                                <span className="font-medium">1.2 трлн сашинов</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Рост ВВП:</span>
                                <span className="font-medium text-green-600">4.8%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Безработица:</span>
                                <span className="font-medium">3.1%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Инфляция:</span>
                                <span className="font-medium">2.8%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Экспорт:</span>
                                <span className="font-medium">300 млрд сашинов</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Импорт:</span>
                                <span className="font-medium">280 млрд сашинов</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-[#8B4513]">Структура экономики</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {economicData.map((item, index) => (
                                <div key={index} className="flex justify-between items-center">
                                  <span className="text-sm">{item.sector}</span>
                                  <Badge variant="outline" className="text-[#8B4513]">{item.percentage}</Badge>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#8B4513]">Государственный бюджет (360 млрд сашинов)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Сфера</TableHead>
                                <TableHead>Расходы</TableHead>
                                <TableHead>% бюджета</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {budgetData.map((item, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{item.category}</TableCell>
                                  <TableCell>{item.amount}</TableCell>
                                  <TableCell>{item.percentage}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="regions" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-[#8B4513]">Административное деление</CardTitle>
                        <CardDescription>5 провинций и 2 столичных округа</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Регион</TableHead>
                              <TableHead>Административный центр</TableHead>
                              <TableHead>Население</TableHead>
                              <TableHead>Особенности</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {regions.map((region, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{region.name}</TableCell>
                                <TableCell>{region.center}</TableCell>
                                <TableCell>{region.population}</TableCell>
                                <TableCell className="text-sm">{region.features}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="politics" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#8B4513]">Государственное устройство</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Президент</h4>
                            <p className="text-sm text-gray-600">Выбирается на 5 лет, возглавляет армию и управляет внешней политикой</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Парламент</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                              <li>• Сенат (верхняя палата)</li>
                              <li>• Палата народных депутатов</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Правительство</h4>
                            <p className="text-sm text-gray-600">Премьер-министр формирует кабинет министров</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#8B4513]">Международные отношения</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium text-green-600">Союзники</h4>
                            <p className="text-sm text-gray-600">Кальвария, Вестмарк</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-600">Противники</h4>
                            <p className="text-sm text-gray-600">Кусария, Ортания</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Организации</h4>
                            <ul className="text-sm text-gray-600">
                              <li>• Совет наций</li>
                              <li>• Организация Объединённой Экологической Сети</li>
                              <li>• Всемирный Торговый Союз</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            )}

            {selectedCountry === 'kusaria' && (
            <Card className="bg-white border-[#8B4513]/20">
              <CardHeader>
                <CardTitle className="text-3xl text-[#2F4F4F]" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                  Кусарийская Демократическая Республика
                </CardTitle>
                <CardDescription className="text-lg">
                  Авторитарное социалистическое государство на востоке материка Альвания
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="general">Общие сведения</TabsTrigger>
                    <TabsTrigger value="economy">Экономика</TabsTrigger>
                    <TabsTrigger value="regions">Регионы</TabsTrigger>
                    <TabsTrigger value="politics">Политика</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#8B4513]">Основная информация</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Полное название:</span>
                            <span>Кусарийская Демократическая Республика</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Столица:</span>
                            <span>Кусарград</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Население:</span>
                            <span>18.2 млн</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Площадь:</span>
                            <span>78,600 км²</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Форма правления:</span>
                            <span>Социалистическая республика</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Генеральный секретарь:</span>
                            <span>Карлет Железен</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Председатель Совмина:</span>
                            <span>Лилиет Стален</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Валюта:</span>
                            <span>Кусарийский рубл (KRB)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">ВВП:</span>
                            <span>650 млрд кусарийских рублей</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Социалистическая революция:</span>
                            <span>3 декабря 1947 года</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Правящая партия:</span>
                            <span>Кусарийская Рабочая Партия</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#8B4513]">География и климат</h3>
                        <div className="text-sm space-y-2">
                          <p><strong>Расположение:</strong> Восток материка Альвания</p>
                          <p><strong>Границы:</strong></p>
                          <ul className="ml-4 space-y-1">
                            <li>• Запад — Сашианийская Республика</li>
                            <li>• Север — Кусарийское море</li>
                            <li>• Восток — Государство Новет</li>
                            <li>• Юг — Горные хребты Альваниды</li>
                          </ul>
                          <p><strong>Рельеф:</strong></p>
                          <ul className="ml-4 space-y-1">
                            <li>• Север — промышленные равнины</li>
                            <li>• Центр — холмистая местность</li>
                            <li>• Юг — предгорья Альванид</li>
                          </ul>
                          <p><strong>Водные объекты:</strong> Река Кусара, озеро Железет</p>
                          <p><strong>Климат:</strong> Умеренно-континентальный с холодными зимами</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="economy" className="mt-6">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-[#8B4513]">Макроэкономические показатели</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>ВВП:</span>
                                <span className="font-medium">650 млрд кусарийских рублей</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Рост ВВП:</span>
                                <span className="font-medium text-orange-600">2.1%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Безработица:</span>
                                <span className="font-medium">7.8%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Инфляция:</span>
                                <span className="font-medium">8.5%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Экспорт:</span>
                                <span className="font-medium">180 млрд рублей</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Импорт:</span>
                                <span className="font-medium">210 млрд рублей</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-[#8B4513]">Структура экономики</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">ВПК и машиностроение</span>
                                <Badge variant="outline" className="text-[#8B4513]">42%</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Металлургия</span>
                                <Badge variant="outline" className="text-[#8B4513]">28%</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Энергетика</span>
                                <Badge variant="outline" className="text-[#8B4513]">15%</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Сельское хозяйство</span>
                                <Badge variant="outline" className="text-[#8B4513]">8%</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Услуги</span>
                                <Badge variant="outline" className="text-[#8B4513]">7%</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#8B4513]">Государственный план (195 млрд рублей)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Сфера</TableHead>
                                <TableHead>Расходы</TableHead>
                                <TableHead>% бюджета</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Оборона и ВПК</TableCell>
                                <TableCell>68 млрд</TableCell>
                                <TableCell>34.9%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Тяжелая промышленность</TableCell>
                                <TableCell>39 млрд</TableCell>
                                <TableCell>20.0%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Партийный аппарат</TableCell>
                                <TableCell>12 млрд</TableCell>
                                <TableCell>6.2%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Здравоохранение</TableCell>
                                <TableCell>25 млрд</TableCell>
                                <TableCell>12.8%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Образование</TableCell>
                                <TableCell>21 млрд</TableCell>
                                <TableCell>10.8%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Инфраструктура</TableCell>
                                <TableCell>19 млрд</TableCell>
                                <TableCell>9.7%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Социальное обеспечение</TableCell>
                                <TableCell>15 млрд</TableCell>
                                <TableCell>7.7%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Прочие расходы</TableCell>
                                <TableCell>8 млрд</TableCell>
                                <TableCell>4.1%</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="regions" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-[#8B4513]">Административное деление</CardTitle>
                        <CardDescription>4 области и 1 столичный округ</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Регион</TableHead>
                              <TableHead>Административный центр</TableHead>
                              <TableHead>Население</TableHead>
                              <TableHead>Особенности</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Столичный округ Кусарград</TableCell>
                              <TableCell>Кусарград</TableCell>
                              <TableCell>6.2 млн</TableCell>
                              <TableCell className="text-sm">Партийный центр, ВПК, машиностроение</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Северная область</TableCell>
                              <TableCell>Портет</TableCell>
                              <TableCell>4.1 млн</TableCell>
                              <TableCell className="text-sm">Порты, судостроение, рыболовство</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Центральная область</TableCell>
                              <TableCell>Железенск</TableCell>
                              <TableCell>3.8 млн</TableCell>
                              <TableCell className="text-sm">Металлургия, горнодобыча</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Восточная область</TableCell>
                              <TableCell>Новет Кусар</TableCell>
                              <TableCell>2.7 млн</TableCell>
                              <TableCell className="text-sm">Энергетика, химическая промышленность</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Южная область</TableCell>
                              <TableCell>Горнет</TableCell>
                              <TableCell>1.4 млн</TableCell>
                              <TableCell className="text-sm">Добыча полезных ископаемых</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="politics" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#8B4513]">Государственное устройство</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Генеральный секретарь КРП</h4>
                            <p className="text-sm text-gray-600">Пожизненный лидер партии и государства, избирается Политбюро</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Верховный Совет</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                              <li>• 280 депутатов от трудовых коллективов</li>
                              <li>• Формально высший орган власти</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Совет министров</h4>
                            <p className="text-sm text-gray-600">Исполнительный орган, подчиняется Политбюро КРП</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Идеология</h4>
                            <p className="text-sm text-gray-600">Кусарийский социализм - синтез марксизма и националистических идей</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-[#8B4513]">Международные отношения</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium text-red-600">Противники</h4>
                            <p className="text-sm text-gray-600">Сашианийская Республика (территориальные споры за газовые месторождения)</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-orange-600">Спонсоры</h4>
                            <p className="text-sm text-gray-600">Ортания (поддержка ВПК, политическая поддержка)</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-600">Нейтральные</h4>
                            <p className="text-sm text-gray-600">Новет (ограниченное торговое сотрудничество)</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Организации</h4>
                            <ul className="text-sm text-gray-600">
                              <li>• Союз Восточных Республик</li>
                              <li>• Организация Промышленного Сотрудничества</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="text-lg text-[#8B4513]">Исторические конфликты</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Газовый конфликт (2019-2023)</h4>
                            <p className="text-gray-600">Спор с Сашианией о газовых месторождениях в приграничной зоне. Кусария заявляет права на 60% запасов, ссылаясь на "исторические земли трудящихся Кусарии".</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2F4F4F]">Военная доктрина</h4>
                            <p className="text-gray-600">"Социалистическая оборона от капиталистической агрессии". Развитие ВПК для "защиты завоеваний революции" и экспорта оружия союзникам.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            )}
          </div>
        )}


      </main>

      {/* Footer */}
      <footer className="bg-[#2F4F4F] text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-white/80">© 2025 Энциклопедия вымышленных стран. Все права защищены.</p>
            <p className="text-white/60 text-sm mt-2">Исследуйте мир Альвании и познавайте его богатую историю</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;